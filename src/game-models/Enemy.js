// Враг.
const player = require('play-sound')((opts = {}));

class Enemy {
  constructor({ position }) {
    this.generateSkin();
    this.position = position;
  }

  generateSkin() {
    const skins = ['👾', '💀', '👹', '👻', '👽', '👿', '💩', '🤡', '🤺', '🧛', '🧟', '🎃'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  die() {
    this.position = '?';
    console.log('Enemy is dead!');
    player.play('src/sounds/hold-your-horses.wav', err => {
      if (err) console.log(err);
    });
  }
}

module.exports = Enemy;