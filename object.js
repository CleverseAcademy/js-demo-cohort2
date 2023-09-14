const person = {
  name: 'John',
  age: 20,
  pet: {
    kind: 'Rabbit',
    age: 2,
  },
}

const keyName = 'name'

console.log('Name:', person.name) // * Access using dot notation
console.log('Name:', person[keyName]) // * Access using bracket notation

// * Review Reference Type
// const person2 = person
// person2.name = 'Men'

// console.log('person 1:', person)
// console.log('person 2:', person2)

// * Array of object: data from fetching data
const data = [
  {
    name: 'John',
    age: 22,
    job: 'software engineer',
  },
  {
    name: 'Johny',
    age: 26,
    job: 'web designer',
  },
  {
    name: 'Watson',
    age: 36,
    job: 'marketing',
  },
]

data.forEach((person, idx) => {
  console.log('Person', idx + 1)
  console.log('Name:', person.name)
  console.log('Age:', person.age)
  console.log('Job:', person.job)
  console.log('------------------')
})

const resultString = data.reduce((prevVal, val, idx) => {
  return `${prevVal}\n
    Person ${idx + 1}\n
    Name: ${val.name}\n
    Age: ${val.age}\n
    Job: ${val.job}\n
    ------------------`
}, '')

console.log(resultString)
