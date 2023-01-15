// Наш герой.
const cfonts = require('cfonts');

const prettyFont = cfonts.render('You DIED!', { background: 'transparent' }).array.join('\n');

class Hero {
  constructor() {
    this.skin = '💪😼👉'; // можете использовать любые emoji '💃'
    this.position = 2;
  }

  moveLeft() {
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  attack() {
    // Атакуем.
    this.boomerang.fly();
  }

  die() {
    this.skin = '💀';
    console.log(prettyFont);
    process.exit();
  }
}

module.exports = Hero;
