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

  runInteractiveConsole(hodba, strelba) {
    keypress(process.stdin);
    process.stdin.on('keypress', (ch, key) => {
      if (key) {
        // Вызывает команду, соответствующую нажатой кнопке.
        if (key.name === 'q') {
          hodba.moveLeft();
        }
        if (key.name === 'w') {
          hodba.moveRight();
        }
        if (key.name === 'e') {
          strelba.moveRight();
        }
        // Прерывание программы.
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