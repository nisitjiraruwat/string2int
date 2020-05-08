// random input

const string2int = (value) => {
  let result = "";
  let i;
  for (i = 0; i < value.length; i++) {
    if (value[i] >= '0' && value[i] <= '9') {
      result += value[i];
    }
  }

  return parseInt (result)
}

const input = Math.floor((1 + Math.random()) * 0x1000000000).toString(16)

console.log ('input: ' + input);
console.log ('string2int: ' + string2int (input));