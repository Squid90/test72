import Validator from '../validator';

const expectedTrue = true;
const expectedFalse = false;

// eslint-disable-next-line
test('Проверка допустимого имени', () => {
  const name = 'AS-D_z986xc';
  const validName = new Validator(name);
  // eslint-disable-next-line
  expect(expectedTrue).toEqual(validName.validateUsername(name));
});

// eslint-disable-next-line
test('Проверка НЕдопустимого имени. Символы в начале', () => {
  const name = '-9AS-D_z986xc';
  const validName = new Validator(name);
  // eslint-disable-next-line
  expect(expectedFalse).toEqual(validName.validateUsername(name));
});

// eslint-disable-next-line
test('Проверка НЕдопустимого имени. Символы в конце', () => {
  const name = 'AS-D_z986xc_5';
  const validName = new Validator(name);
  // eslint-disable-next-line
  expect(expectedFalse).toEqual(validName.validateUsername(name));
});

// eslint-disable-next-line
test('Проверка НЕдопустимого имени. Много цифр подряд', () => {
  const name = 'AS-D_z9896xc';
  const validName = new Validator(name);
  // eslint-disable-next-line
  expect(expectedFalse).toEqual(validName.validateUsername(name));
});

// eslint-disable-next-line
test('Проверка НЕдопустимого имени. Кииллица', () => {
  const name = 'AS-DАПР_z96xc';
  const validName = new Validator(name);
  // eslint-disable-next-line
  expect(expectedFalse).toEqual(validName.validateUsername(name));
});