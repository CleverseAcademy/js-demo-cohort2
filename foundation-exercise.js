// ********* EASY **********
// *********** 1 ***********
const mapRevertSign = (arr) => {
  const a = []

  arr.forEach((elem) => {
    a.push(0 - elem)
  })

  return a
}

const mapRevertSign2 = (arr) => {
  return arr.map((elem) => {
    return 0 - elem
  })
}

// *********** 6 ***********
const drawNg = (n) => {
  if (n < 0) return

  // * Loop for each line
  for (let i = 0; i < n; i++) {
    // * Initialize s
    let s = ''

    // * Loop for each star
    for (let j = 0; j <= i; j++) {
      s += '*'
    }
    console.log(s)
  }
}

// * Another solution for `drawNg` which is much more efficient!
const drawNg2 = (n) => {
  if (n < 0) return
  let pattern = ''

  for (let i = 0; i < n; i++) {
    pattern += '*'
    console.log(pattern)
  }
}

// *********** 12 ***********
const compoundedReturn = (amount, interestPercent, periods) => {
  let finalAmount = amount

  for (let i = 0; i < periods; i++) {
    finalAmount = finalAmount * (1 + interestPercent / 100)
  }

  return finalAmount
}

const compoundedReturn2 = (amount, interestPercent, periods) => {
  return amount * (1 + interestPercent / 100) ** periods
}

// *********** 13 ***********
const mean = (arr) => {
  let sum = 0

  const isAllNumber = arr.every((val) => typeof val === 'number')

  if (!isAllNumber) return null

  arr.forEach((n) => {
    sum += n
  })

  return sum / arr.length
}

console.log(mean([1, 2, '3', 4]))

// *********** 14 ***********
const mid = (arr) => {
  if (arr.length === 1) return arr

  const middlePosition = Math.floor(arr.length / 2)

  if (arr.length % 2 === 0) {
    const elem1 = arr[middlePosition - 1]
    const elem2 = arr[middlePosition]

    return [elem1, elem2]
  }

  return [arr[middlePosition]]
}

// *********** 18 ***********
const flatMap = (arr) => {
  const flattened = []

  // * Since we sent the nested array into this function, elem is also an array
  arr.forEach((elem) => {
    // * 1st loop
    // * elem -> [1, 2, 3]
    // * flattened.push(1, 2, 3)
    flattened.push(...elem)
  })

  return flattened
}

const arr = [
  [1, 2, 3],
  [100, 200],
  [10, 20],
]

// *********** 21 ***********
const toBytes = (s) => {
  // * We don't know yet if s contains any non-ASCII char,
  // * so we start with empty an array.
  const bytes = []

  for (let i = 0; i < s.length; i++) {
    const char = s.charCodeAt(i)

    if (char > 255) {
      continue
    }

    bytes.push(char)
  }

  return bytes
}

// console.log(toBytes('Bar')) // * [ 66, 97, 114 ]
// console.log(toBytes('Foo')) // * [ 70, 111, 111 ]
// console.log(toBytes('🔥😎😵‍💫Foo')) // * [ 70, 111, 111 ] because the emoji is invalid ASCII

// ********* MEDIUM **********
// ********* 1 **********
const maxNegMinPos = (arr) => {
  // These could be null
  let maxNeg = null
  let minPos = null

  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i]

    if (elem < 0) {
      // * negative num
      if (!maxNeg) {
        maxNeg = elem
        continue
      }

      if (elem > maxNeg) {
        maxNeg = elem
      }
    } else {
      // * positive num
      if (!minPos) {
        minPos = elem
        continue
      }

      if (elem < minPos) {
        minPos = elem
      }
    }
  }

  console.log(`MaxNeg is ${maxNeg}\nMinPos is ${minPos}`)
}

maxNegMinPos([-12, 13, -4, 4, 12, 1, -18])
