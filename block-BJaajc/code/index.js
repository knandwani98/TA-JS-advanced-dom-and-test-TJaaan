function getFullName(firstName, lastName) {
  return firstName + lastName;
}

function isPalindrome(input) {
  return input.toString() === input.toString().split('').reverse().join('');
}

function getCircumfrence(radius) {
  const circumference = ((2 * 22) / 7) * radius;
  return `The circumference is ${circumference}`;
}

function getArea(radius) {
  const area = (22 / 7) * radius * radius;
  return `The area is ${area}`;
}

// 3. Create 2 functions that calculate properties of a circle, using the definitions here.

// - Create a function called `getCircumfrence`:

// Pass the radius of a circle to the function and it returns the circumference based on the radius, and output `The circumference is NN`.

// - Create a function called `getArea`:

// Pass the radius to the function and it returns the area based on the radius, and output `The area is NN`.

module.exports = { getFullName, isPalindrome, getCircumfrence, getArea };
