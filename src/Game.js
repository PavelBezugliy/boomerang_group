// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

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
    this.hero = new Hero({ position: 5 }); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy({ position: 100 });
    this.boomerang = new Boomerang({ position: 5 });
    this.view = new View();
    this.keyboard = new Keyboards();
    this.track = [];
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = (new Array(this.trackLength)).fill(' ');
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.enemy.position] = this.enemy.skin;
    this.track[this.boomerang.position] = this.boomerang.skin;
  }

  check() {
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
    }
    if (this.boomerang.position === this.enemy.position) {
      this.enemy.die()
      this.enemy.position = 100;
      this.enemy.generateSkin();
    }
  }

  spaun() {
    if (this.enemy.position === undefined) {
      new Enemy({ position: 100 })
    }
  }

  play() {
    setInterval(() => {
      this.enemy.moveLeft();
      this.spaun();
      this.keyboard.runInteractiveConsole(this.hero, this.boomerang);
      this.check();
      this.regenerateTrack();
      this.view.render(this.track);
    }, 200);
  }
}

module.exports = Game;
