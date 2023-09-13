const prices = [20, 15, 30, 40, 55]

// prices.forEach((price, idx) => {
//   console.log(idx, price)
// })

const newPrices = prices.map((price) => {
  return price * 1.1
})

console.log(newPrices)
