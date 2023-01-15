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
<<<<<<< HEAD
    console.log('\n\n');
    console.log(`Created by "${yourTeamName}" with love`);
=======
    console.log('\n\n\n');
    console.log('=======================================================================================================');
    console.log(``);
    console.log(`Привет, ${name}! Ходить влево: Q / Ходить вправо: W / Стрелять: E / Выйти из игры: Ctrl + C`);
>>>>>>> 024064f2e90631f79caab90f85d0cf42fef1a058
  }
}

module.exports = View;