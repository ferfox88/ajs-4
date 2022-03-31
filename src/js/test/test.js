import lifeLine from '../app';

test.each([
  [{ name: 'мечник', health: 100 }, 'healthy'],
  [{ name: 'маг', health: 36 }, 'wounded'],
  [{ name: 'лучник', health: 4 }, 'critical'],
])(('test lifeLine'), (data, expected) => {
  expect(lifeLine(data)).toBe(expected);
});
