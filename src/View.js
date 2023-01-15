// Сделаем отдельный класс для отображения игры в консоли.

class View {
  render(track, count, name) {
    const yourTeamName = 'Elbrus';

    console.clear();
    console.log('=======================================================================================================');
    console.log(`                                                                                       Имя героя: ${name}`);
    console.log(`                                                                                      Очки героя: ${count}`);
    console.log('\n\n');
    console.log(track.join(''));
    console.log('\n\n\n');
    console.log('=======================================================================================================');
    console.log(`Created by "${yourTeamName}" with love`);
  }
}

module.exports = View;
