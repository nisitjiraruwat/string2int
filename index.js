const string2int = (value) => {
  let result = 0
  let multiply = 1
  let isInt = false
  let i =  value.length
  for (; 0 <= i; i--) {
    if (value[i] >= '0' && value[i] <= '9') {
      result += value[i] * multiply
      multiply *= 10
      isInt = true
    }
  }

  return isInt ? result : NaN
}

// random input
const input = Math.floor((1 + Math.random()) * 0x1000000000).toString(16)

console.log ('input: ' + input)
console.log ('string2int: ' + string2int (input))