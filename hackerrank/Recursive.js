function factorial(n) {
  if (n === 0) {
    return 1;
  }
  // console.log(n);
  return n * factorial(n - 1);

}

// let result = factorial(4)
// console.log(factorial(4));
// console.log(result)

let countDownFrom = (num) => {

  console.log(num)
  if (num > 0)
    countDownFrom(num-1)
}

// countDownFrom(10)
// -------------------------------------------
let sumRange = (num) => {
  
  if (num === 1) {
    return 1
  }
  return num+sumRange (num-1)
  
}
// console.log(sumRange(3))

// -------------------------------------------
let power = (base, exp) => {
  if (exp === 0) {
    return 1
  }
  return base* power(base, exp-1)
}
// console.log(power(2, 4))
// console.log(power(2,3))
// console.log(power(2, 2))

let all = (arr, callback) => {
  // var copy = copy || arr.slice()
  let copy = arr.slice()

  if (copy.length === 0) {return true}

  if (callback(copy[0])) {
    copy.shift();
    return all(copy, callback)
  }
  else {
    return false
  }
}

let allAreLessThanSeven = all([1, 2, 9], function (num) {
    return num < 7
}
)

// -------------------------------------------

let productOfArray = (arr) => {
  
  if (arr.length === 0)
  return 1
  
  return arr.shift() * productOfArray(arr)
  
}
// productOfArray([1,2,3])

// -------------------------------------------

let contains = (obj, value) => {
  for (var key in obj) {
    if (typeof obj[key] === 'object') {
      return contains(obj[key], value)
    }

    if (obj[key] === value) {
      return true
    }
  }
  return false
}

var nestedObject = {
  data: {
      info: {
          stuff: {
              thing: {
                  moreStuff: {
                      magicNumber: 44,
                      something: 'foo2'
                  }
              }
          }
      }
  }
}

// let hasIt = contains(nestedObject, 44); // true
// let doesntHaveIt = contains(nestedObject, "foo"); // false
// console.log (hasIt)
// console.log(doesntHaveIt)


// -------------------------------------------
let totalIntegers = (array) => {
  if (array.length === 0) return 0

  let total = 0
  let first = array.shift()

  if (Array.isArray(first)) {
    total += totalIntegers(first)
  }
  else if (Number.isInteger(first)) {
    total += 1
  }
  return total + totalIntegers(array)

}

// var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7
// console.log (seven)

let replicate = (count, num) => {
  const result = []

  if(count === 0)
    return []
  
  return [num].concat(replicate(count - 1, num))
  
}

res = replicate(3, 5)
console.log (res)