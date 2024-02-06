import Character from '../class/Character';

test('Правильно создается объект', () => {
  const objectCharacter = new Character('Game', 'Magician');
  const correct = {
    name: "Game",
    type: "Magician",
    health: 100,
    level: 1,
    attack: undefined,
    defence: undefined,
  };
  expect(objectCharacter).toEqual(correct);
});
