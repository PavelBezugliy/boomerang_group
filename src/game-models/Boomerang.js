// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor({ position }) {
    this.skin = '🌀';
    this.position = position;
  }

  fly() {
    setInterval(() => {
      this.moveRight();
    }, 200);
  }
  clear(){
    clearInterval()
  }

  moveLeft() {
    this.position -= 1;
  }

  moveRight() {
    this.position += 1;
  }
  die() {
    this.position = '?';
  }
}

module.exports = Boomerang;