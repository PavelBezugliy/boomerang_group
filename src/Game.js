// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().
const player = require('play-sound')((opts = {}));
const { User } = require('../db/models');

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const Boomerang = require('./game-models/Boomerang');
const Keyboards = require('./keyboard');
const View = require('./View');

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.hero = new Hero(); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy({ position: 99 });
    this.boomerang = new Boomerang({ position: this.hero.position });
    this.view = new View();
    this.keyboard = new Keyboards();
    this.track = [];
    this.count = 0;
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = new Array(this.trackLength).fill(' ');
    this.track[this.enemy.position] = this.enemy.skin;
    this.track[this.boomerang.position] = this.boomerang.skin;
    this.track[this.hero.position] = this.hero.skin;
  }

  check() {
    if (this.hero.position === this.enemy.position - 1) {
      this.hero.die();
    }
    if (this.boomerang.position >= this.enemy.position - 1) {
      this.enemy.die();
      this.enemy.position = 99;
      this.enemy.generateSkin();
      this.count += 10;
      this.boomerang.die();
    }
    if (this.boomerang.position < this.hero.position) {
      this.boomerang.die();
      this.boomerang.position = '?';
    }

    if (
      this.boomerang.position === '?' ||
      this.boomerang.position > this.hero.position + 10
    ) {
      this.boomerang.die();
    }
    if (this.boomerang.position === '?') {
      this.boomerang.position = this.hero.position;
    }
  }

  sound() {
    player.play('src/sounds/bg_music.mp3', (err) => {
      if (err) console.log(err);
    });
  }

  play() {
    const name = process.argv[2];
    async function createUser(user_name, score) {
      try {
        const user = await User.findOne({
          where: { user_name: name },
        });
        if (!user) {
          await User.create({ user_name: name, score: score });
        }
        // else {

        //     await db.user.findOrCreate({
        //       where: { user_name: name},
        //       score: {this.hero.count },
        //     });

        //   }
      } catch (e) {
        console.log('Error message: ', e.message);
      }
    }
    createUser(name, this.count);
    this.keyboard.runInteractiveConsole(this.hero, this.boomerang);

    setInterval(() => {
      this.enemy.moveLeft();
      this.check();
      this.regenerateTrack();
      this.view.render(this.track, this.count, name);
    }, 50);
    this.sound();
  }
}

module.exports = Game;
