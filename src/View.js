// Сделаем отдельный класс для отображения игры в консоли.

class View {
  render(track, count, name, test) {
    const yourTeamName = 'Elbrus';
    console.clear();
    console.log('=======================================================================================================');
    console.log(`                                                                                       Имя героя: ${name}`);
    console.log(`                                                                                      Очки героя: ${count}`);
    console.log('\n\n');
    console.log(track.join(''));
    console.log('\n\n\n');
    console.log(`Индекс этого пидараса: ${test}`);
    console.log('=======================================================================================================');
    console.log('');
  }
}

module.exports = View;
