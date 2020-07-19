

// sum of index 0, 1, 2
// ============================

const ss = (arr, req) => {
  let sum = 0;
  let allSum = [];
  
  for (let j = 0; j < req.length; j += 1) {
    for (let i = 0; i <= req[j]; i += 1) {
      sum += arr[i];
    }
    allSum.push(sum);
    sum = 0;
  }
  return allSum;
}

req = [2, 3]
req = [[0,2], [1,3]]
arr = [2, 4, 6, 8, 1, 3]

console.log(ss(arr, req));



// Array.reduce((value, sum) => {
//   return value + sum;
// })