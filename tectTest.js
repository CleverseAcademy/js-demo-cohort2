function add(a, b) {
  return a + b
}

// const add2 = (a, b) => a + b

// * 1.1.1 - 2

// * 1.1.2
// console.log(add(3, 4)) // * number
// console.log(add('3', '4')) // * string
// console.log(add('3', 4)) // * string

// * 1.1.3
// console.log(add(1, 2)) // * 3

// * 1.1.4
// console.log(add(1, '2')) // * "12"

// * 1.1.5
// console.log(add('foo', 'bar', 'baz')) // * foobar

// * 1.1.6 - 3

// * 1.1.7
// console.log(add(10, add(1, 2, 3))) // * 13

function add2(a, b = 10, c = 20) {
  return a + b + c
}

// * 1.2.1 - 3

function sum(...numbers) {
  let result = 0

  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i]
  }

  return result
}

function sum2(...numbers) {
  return numbers.reduce((prev, val) => prev + val)
}

console.log(sum(10, 20, 30, 40))
console.log(sum2(10, 20, 30, 40))

// * 1.3.1 - Array of number

// function isNeg(n) {
//   return n < 0;
// }

const isNeg = (n) => {
  return n < 0
}

const isNeg2 = n => {
  return n < 0
}

const isNeg3 = (n) => n < 0

const isNeg4 = n => n < 0

function assignLegalAge(obj) {
  obj.age = 18;
}

const person = {
  name: "Men",
  age: 22
}

const assignLegalAge2 = obj => {
  obj.age = 18
}

const assignLegalAge3 = (obj) => {
  obj.age = 18
}

console.log(person)


const nums = [1, 2, 3, -10, -12]

const negs2 = nums.filter(n => n < 0)




const numbers = [-2, -1, 0, 1, 2];

const isNegs = numbers.map((val) => {
  return val < 0
});

const negs = numbers.filter((val) => {
  return val < 0
});


const numbers2 = [10, 20, 30, 40, 50];
const result = numbers2.map((val) => val/10);

const result2 = result.filter(val => val%2 !== 0)

const result3 = result.filter((_, i) => i%2 === 0)

console.log(result)
console.log(result2)
console.log(result3)