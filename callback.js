const callMe = () => {
  console.log('hello from callback function')
}

const greeting = (callback) => {
  console.log('hello world')
  callback()
}

// * Call a greeting function with passing in reference of `callMe` function
// greeting(callMe)

// * Annonymous Function
// function() {
//   console.log("Men")
// }

// () => {
//   console.log("Men")
// }

// * Call a greeting function with passing in an annonymous function
// greeting(function () {
//   console.log('Men from annonymous function')
// })

// * Call a greeting function with passing in an annonymous arrow function
greeting(() => {
  console.log('Men from annonymous arrow function')
})

// * Callback function with parameter
const greeting2 = (callback) => {
  console.log('hello world')
  callback('Fern')
}

greeting2((name) => {
  console.log(`hello from ${name}`)
})

const originalArr = [1, 2, 3, 4]

const loopThroughArrayV2 = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i])
  }
}

loopThroughArrayV2(originalArr, (item) => {
  console.log(item)
})

const mapArray = (arr, cb) => {
  const result = []

  for (let i = 0; i < arr.length; i++) {
    const newItem = cb(arr[i])
    result.push(newItem)
  }

  return result
}

const newArr = mapArray(originalArr, (item) => {
  return item * 2
})

// console.log(newArr)

// * Exercise: Create a function called "filterArray" to filter only positive number
// * 1. This function receive 2 parameters, arr and cb.
// * 2. cb function must receive 1 parameter, which is each item from the array
// * 3. cb must return only boolean, if it return true, keep that item, otherwise, don't keep it.
// * 4. filterArray must return a new array that keeps all true items

function filterArray(arr, cb) {
  const result = []

  for (let i = 0; i < arr.length; i++) {
    const isKeeping = cb(arr[i])
    if (isKeeping) {
      result.push(arr[i])
    }
  }

  return result
}

const beforeFilter = [-1, 3, 20, -24]

const afterFilter = filterArray(beforeFilter, (item) => {
  return item > 0
})

// * [3, 20]
console.log(afterFilter)
