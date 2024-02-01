import Zombie from '../class/Zombie';


test('Проверка создания экземпляра класса', () => {
  const objectZombie = new Zombie('Gamen', 'Zombie');
  const correct = {
    name: 'Gamen',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(objectZombie).toEqual(correct);
});