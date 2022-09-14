// ** Input **
const input1 = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
const input2 = [5555]
const input3 = '10'

// ** Solution **
function aVeryBigSum(ar) {

  // Declare Working Variable
  let sum = ar

  // If Already Integer >> Return as Sum
  if (typeof sum == 'number') {
    return sum
  }

  // If String or Object
  if (typeof sum == 'string' || typeof sum == 'object') {

    // Split String into Array at Space
    if (typeof sum == 'string') { sum = sum.split(' ') }

    // Reduce
    sum = sum.reduce((a,b) => {

      // If Number > Parse as Integer
      (typeof a == 'number' && typeof b == 'number')
      a = parseInt(a)
      b = parseInt(b)

      return a += b
    }, 0)

    // Return Sum
    return sum
  }
}

// ** Testing **
console.log(aVeryBigSum(input1))
console.log(aVeryBigSum(input2))
console.log(aVeryBigSum(input3))