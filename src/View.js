// Сделаем отдельный класс для отображения игры в консоли.

class View {
  render(track, count, name, test) {
    const yourTeamName = 'Elbrus';
    console.clear();
    console.log(track.join(''));
    console.log('\n\n\n');
    console.log(`Индекс этого пидараса: ${test}`);
    console.log('=======================================================================================================');
    console.log(``);
  }
}

module.exports = View;
