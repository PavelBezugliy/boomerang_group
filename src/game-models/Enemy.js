// Враг.

class Enemy {
  constructor(trackLength) {
    this.generateSkin();
    // this.position = 2;
    this.position = trackLength - 1;
    this.isAlive = true;
  }

  generateSkin() {
    const skins = [
      '👾',
      '💀',
      '👹',
      '👻',
      '👽',
      '👿',
      '💩',
      '🤡',
      '🤺',
      '🧛',
      '🧟',
      '🎃',
    ];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  die() {
    this.position = this.hero.position;
    console.log('Enemy is dead!');
  }
}

module.exports = Enemy;
