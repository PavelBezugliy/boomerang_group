// Сделаем отдельный класс для отображения игры в консоли.
const chalk = require('chalk');

class View {
  render(track, count, name) {
    const yourTeamName = 'NiceTry';
    console.clear();
    console.log(chalk.blue(`🔥🔥🔥 ${yourTeamName} Team Production presents:`));
    console.log('\n');
    console.log(
      chalk.magenta(`      Привет, ${name}! Ходить влево: Q / Ходить вправо: W / Стрелять: E / Выйти из игры: Ctrl + C`)
    );
    console.log('\n');
    console.log(
      '⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓'
    );
    console.log('\n');
    console.log(
      `                                                                                       ${chalk.green('Имя героя:')} ${chalk.yellow(name)}`
    );
    console.log(
      `                                                                                      ${chalk.green('Очки героя:')} ${chalk.yellow(count)}`
    );
    console.log('\n\n');
    console.log(track.join(''));
    console.log('\n\n\n');
    console.log(
      '⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓⛓'
    );
    console.log('\n');
  }
}

module.exports = View;