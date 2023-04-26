import Validator from '../validator';

const expected1 = '+79270000000';
const expected2 = '+79600000000';
const expected3 = '+860000000000';

// eslint-disable-next-line
test('Проверка корректности номера 1', () => {
  const number = '8 (927) 000-00-00';
  const validNumber = new Validator(number);
  // eslint-disable-next-line
  expect(expected1).toEqual(validNumber.validateNumber(number));
});

// eslint-disable-next-line
test('Проверка корректности номера 2', () => {
  const number = '+7 960 000 00 00';
  const validNumber = new Validator(number);
  // eslint-disable-next-line
  expect(expected2).toEqual(validNumber.validateNumber(number));
});

// eslint-disable-next-line
test('Проверка корректности номера 3', () => {
  const number = '+86 000 000 0000';
  const validNumber = new Validator(number);
  // eslint-disable-next-line
  expect(expected3).toEqual(validNumber.validateNumber(number));
});
