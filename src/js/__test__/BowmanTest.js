import Bowman from '../class/Bowman';


test('Проверка создания экземпляра класса', () => {
  const objectBowman = new Bowman('Manchik', 'Bowman');
  const correct = {
    name: 'Manchik',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(objectBowman).toEqual(correct);
});

test('Проверка работы метода levelUp()', () => {
  const objectBowman = new Bowman('Manchik', 'Bowman');
  objectBowman.levelUp();
  const correct = {
    name: 'Manchik',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };
  expect(objectBowman).toEqual(correct);
});

test( 'Проверка работы метода damage()', () => {
  const objectBowman = new Bowman('Manchik', 'Bowman');
  objectBowman.damage(20);
  const correct = {
    name: 'Manchik',
    type: 'Bowman',
    health: 85,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(objectBowman).toEqual(correct);
});

test('Проверка работы метода levelUp() со здоровьем ниже нуля', () => {
  const objectBowman = new Bowman('Manchik', 'Bowman');
  objectBowman.damage(200);
  expect(() => objectBowman.levelUp()).toThrow('Нельзя повысить level умершего');
});