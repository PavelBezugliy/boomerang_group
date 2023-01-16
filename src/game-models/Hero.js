// Наш герой.
const player = require('play-sound')((opts = {}));
const chalk = require('chalk');

class Hero {
  constructor() {
    this.skin = '🤠'; // можете использовать любые emoji '💃'
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
  }

  die() {
    this.skin = '💀';
    console.log(chalk.red('                                       Жалкое ничтожество!💀'));
    console.log('\n');
    player.play('src/sounds/congratulations.wav', (err) => {
      if (err) console.log(err);
    });
    process.exit();
  }
}

module.exports = Hero;
