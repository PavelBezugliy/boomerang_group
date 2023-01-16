// Умеешь работать с keypress? Попробуй разобраться в этом файле.
// Вместо keypress можно использовать и стандартный readline.
// Главное не используй всё вместе!

const keypress = require('keypress');
// Управление.
// Настроим соответствия нажатий на клавиши и действий в игре.

// const keyboard = {
//   q: () => this.hero.moveLeft(),
//   w: () => this.hero.moveRight(),
//   e: () => this.boomerang.moveRight(),
//   r: () => console.log('r'),
//   t: () => console.log('t'),
//   y: () => console.log('y'),
// };
class Keyboards {
  runInteractiveConsole(hero, boomerang) {
    keypress(process.stdin);
    process.stdin.on('keypress', (ch, key) => {
      if (key) {
        if (key.name === 'q') {
          hero.moveLeft();
        }
        if (key.name === 'w') {
          hero.moveRight();
        }
        if (key.name === 'e') {
          boomerang.fly()
        }
        if (key.ctrl && key.name === 'c') {
          process.exit();
        }
      }
    });
    process.stdin.setRawMode(true);
  }
}
// Давай попробуем запустить этот скрипт!

// runInteractiveConsole();

module.exports = Keyboards;