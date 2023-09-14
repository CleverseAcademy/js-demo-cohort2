const prices = [20, 15, 30, 40, 55]

// prices.forEach((price, idx) => {
//   console.log(idx, price)
// })

const newPrices = prices.map((price) => {
  return price * 1.1
})

const premiumPrices = newPrices.filter((price) => {
  return price > 30
})

console.log('New Prices:', newPrices)

const sumPrice = newPrices.reduce((prevVal, price) => {
  return prevVal + price
})

console.log('Sum Price:', sumPrice)
