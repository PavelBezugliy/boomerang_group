// Сделаем отдельный класс для отображения игры в консоли.

class View {
  render(track) {
    const yourTeamName = 'Ежи-Пыжы';

    // Тут всё рисуем.
    console.clear();
    console.log(track.join(''));
    console.log('\n\n');
    console.log(`Created by "${yourTeamName}" with love`);

    console.log(this.track);
  }
}

module.exports = View;
