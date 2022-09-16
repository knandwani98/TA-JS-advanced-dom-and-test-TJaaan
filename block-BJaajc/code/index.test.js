/* eslint-disable no-undef */
const index = require('./index');

test('fullName = firstName + lastName', () => {
  expect(index.getFullName('Kushal', 'Nandwani')).toBe('KushalNandwani');
});

test('number should be same from the reverse ', () => {
  expect(index.isPalindrome(12321)).toBe(true);
});

test('Circumferrence of the Circle', () => {
  expect(index.getCircumfrence(7)).toBe(`The circumference is 44`);
});

test('Area of the Circle', () => {
  expect(index.getArea(7)).toBe(`The area is 154`);
});
