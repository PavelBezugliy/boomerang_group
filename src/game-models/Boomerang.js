// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.

const { threadId } = require('worker_threads');

// Тогда можно будет создать класс Weapon и воспользоваться наследованием!
const player = require('play-sound')((opts = {}));

class Boomerang {
  constructor({ position }) {
    this.skin = '🔥';
    this.position = position;
    this.boomdie = '';
  }

  fly() {
    this.boomdie = setInterval(() => {
      this.position += 1;
    }, 100);
    player.play('src/sounds/naa.mp3', (err) => {
      if (err) console.log(err);
    });
  }

  moveLeft() {
    this.position -= 1;
  }

  moveRight() {}
  die() {
    this.position = '?';
    clearInterval(this.boomdie);
  }
}

module.exports = Boomerang;
