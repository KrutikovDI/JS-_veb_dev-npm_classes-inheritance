import Daemon from '../class/Daemon';


test('Проверка создания экземпляра класса', () => {
  const objectDaemon = new Daemon('Gamen', 'Daemon');
  const correct = {
    name: 'Gamen',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(objectDaemon).toEqual(correct);
});