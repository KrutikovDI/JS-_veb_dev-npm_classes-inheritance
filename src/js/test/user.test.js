import { Bowman, Swordsman, Magician, Undead, Zombie, Daemon } from '../user';

test('creating an instance of a class Bowman', () => {
  const objectBowman = new Bowman('Manchik', 'Bowman');
  expect(objectBowman.attack).toBe(25)
});

test('creating an instance of a class Bowman', () => {
  expect(new Bowman(23, 'Bowman')).toBe('Имя должно иметь от 2 до 10 символов и быть строкой')
});

test('creating an instance of a class Bowman', () => {
  expect(new Bowman('Inger', 'man')).toBe('Имя должно иметь от 2 до 10 символов и быть строкой')
});

test('creating an instance of a class Swordsman', () => {
  const objectSwordsman = new Swordsman('Vasia', 'Swordsman');
  objectSwordsman.levelUp()
  expect(objectSwordsman.attack).toBe(48)
});

test('creating an instance of a class Swordsman', () => {
  const objectMagician = new Magician('Sinba', 'Magician');
  objectMagician.levelUp()
  expect(objectMagician.level).toBe(2)
});

test('creating an instance of a class Undead', () => {
  const objectUndead = new Undead('Petya', 'Undead');
  objectUndead.levelUp()
  expect(objectUndead.defence).toBe(30)
});

test('creating an instance of a class Zombie', () => {
  const objectZombie = new Zombie('Reks', 'Zombie');
  objectZombie.levelUp()
  expect(objectZombie.defence).toBe(12)
});

test('creating an instance of a class Daemon', () => {
  const objectDaemon = new Daemon('Silvia', 'Daemon');
  objectDaemon.damage(180)
  objectDaemon.levelUp()
  expect(objectDaemon.health).toBe('Нельзя повысить level умершего')
});

test('creating an instance of a class Daemon', () => {
  const objectDaemon = new Daemon('Silvia', 'Daemon');
  objectDaemon.damage(180)
  objectDaemon.damage()
  expect(objectDaemon.damage()).toBe(undefined)
});