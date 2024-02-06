import Undead from '../class/Undead';


test('Проверка создания экземпляра класса', () => {
  const objectUndead = new Undead('Gamen', 'Undead');
  const correct = {
    name: 'Gamen',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(objectUndead).toEqual(correct);
});