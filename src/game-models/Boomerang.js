// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!
const player = require('play-sound')((opts = {}));

class Boomerang {
  constructor({ position }) {
    this.skin = '🌀';
    this.position = position;
  }

  fly() {
    setInterval(() => {
      this.moveRight();
    }, 200);
    player.play('src/sounds/just-like-magic.wav', (err) => {
      if (err) console.log(err);
    });
  }
  clear() {}
  moveLeft() {
    this.position -= 1;
  }

  moveRight() {
    this.position += 1;
  }
  die() {
    this.position = '?';
  }
}

module.exports = Boomerang;
