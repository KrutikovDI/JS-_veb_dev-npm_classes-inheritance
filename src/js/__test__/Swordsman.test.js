import Swordsman from '../class/Swordsman';


test('Проверка создания экземпляра класса', () => {
  const objectSwordsman = new Swordsman('Gamen', 'Swordsman');
  const correct = {
    name: 'Gamen',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(objectSwordsman).toEqual(correct);
});