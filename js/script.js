const colors = ['red', 'blue', 'green'];
const removedColor = colors.pop();
console.log(colors);

const animals = ['dog', 'cat', 'rabbit'];
const shiftedAnimal = animals.shift();
console.log(animals);

const cities = ['Paris', 'London']; 
const cidade = cities.unshift('New York');
console.log(cities);

const names = ['Alice', 'Bob', 'Charlie'];
const index = names.indexOf('Bob');
console.log(names);

const numbers = [10, 20, 30, 40, 50];
const removed = numbers.splice(1, 2);
console.log(numbers)

const newColors = ['red', 'green', 'blue'];
const slicedColors = colors.slice(1, 3);
console.log(newColors);


const newNumbers = [1, 2, 3]; 
numbers.forEach(num => console.log(num))