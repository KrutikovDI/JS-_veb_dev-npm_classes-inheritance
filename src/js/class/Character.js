export default class Character {
  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Имя должно иметь от 2 до 10 символов и быть строкой');
    }
     const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!types.includes(type)) {
      throw new Error('Должно быть: Bowman, Swordsman, Magician, Daemon, Undead, Zombie')
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }
  levelUp(){
    if (this.health <= 0) {
      throw new Error('Нельзя повысить level умершего')
    } else {
      this.level += 1;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
      this.health = 100;
    }
  }
  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}