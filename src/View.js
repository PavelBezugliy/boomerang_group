// Сделаем отдельный класс для отображения игры в консоли.

class View {
  render(track, count, name, hero) {
    const yourTeamName = 'NiceTry';
    console.clear();
    console.log(`${yourTeamName} Team Production presents:`);
    console.log('\n');
    console.log(
      `      Привет, ${name}! Ходить влево: Q / Ходить вправо: W / Стрелять: E / Выйти из игры: Ctrl + C`
    );
    console.log(
      '======================================================================================================='
    );
    console.log(
      `                                                                                       Имя героя: ${name}`
    );
    console.log(
      `                                                                                      Очки героя: ${count}`
    );
    console.log('\n\n\n');
    console.log(track.join(''));
    console.log('\n\n\n');
    console.log(
      '======================================================================================================='
    );
  }
}

module.exports = View;
