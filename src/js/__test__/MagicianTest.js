import Magician from '../class/Magician';


test('Проверка создания экземпляра класса', () => {
  const objectMagician = new Magician('Gamen', 'Magician');
  const correct = {
    name: 'Gamen',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(objectMagician).toEqual(correct);
});