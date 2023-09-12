const myArr = ['Men', 22]

// console.log('My name:', myArr[0])
// console.log('My age:', myArr[1])

// console.log(myArr[10])

myArr.push('Wed')
myArr.push(2000)

const newArr = myArr.slice(1, 4)

// console.log(newArr)

// console.log(myArr.indexOf(22))

const newArr2 = myArr.concat('hello', 'cleverse academy')

// console.log(myArr)
// console.log(newArr2)

// const hello = ['H', 'e', 'l', 'l', 'o']

// const a = hello.pop()

// console.log(hello)

// const b = hello.pop()

// console.log(hello)

// * Exercise
// ? Create an array that contain 4 foods that you like. Then complete these following tasks.

// ? 1. Locate your most favorite food in the array. Print its array index to the console.
// ? 2. Add your 3 favorite desserts or fruits into that array. Print the result to the console.

// ? CHALLENGES: Look at the Array methods slide. Pick one method to check if your most favorite food is existed in the array or not? (hint: return as boolean)

const myFavFood = ['TomYum', 'SomTum', 'Salmon', 'Pasta']

console.log(myFavFood.indexOf('Salmon'))

myFavFood.push('Ice-cream', 'Yogurt', 'Orange')
console.log(myFavFood)

console.log(myFavFood.includes('Salmon'))
