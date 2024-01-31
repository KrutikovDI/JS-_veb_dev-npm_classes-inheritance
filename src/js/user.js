class Character {
  constructor(name, type, health=100, level=1, attack, defence) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Имя должно иметь от 2 до 10 символов и быть строкой');
    }
     const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!types.includes(type)) {
      throw new Error('Должно быть: Bowman, Swordsman, Magician, Daemon, Undead, Zombie')
    }
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
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

export class Bowman extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack, defence);
    this.attack = 25;
    this.defence = 25;
  }
}

export class Swordsman extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack, defence);
    this.attack = 40;
    this.defence = 10;
  }
}

export class Magician extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack, defence);
    this.attack = 10;
    this.defence = 40;
  }
}

export class Undead extends Character {
   constructor(name, type, health, level, attack, defence) {
     super(name, type, health, level, attack, defence);
     this.attack = 25;
     this.defence = 25;
   }
 }

 export class Zombie extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack, defence);
    this.attack = 40;
    this.defence = 10;
  }
}

export class Daemon extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack, defence);
    this.attack = 10;
    this.defence = 40;
  }
}