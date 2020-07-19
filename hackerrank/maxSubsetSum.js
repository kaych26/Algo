'use strict';

function maxSubsetSum(arr) {
  
  if (arr.length === 0)
  return 0;
  
  else if (arr.length === 1)
    return arr[0];
  
  else if (arr.length === 2) 
    return Math.max(...arr);
  
  // [-2, 3, 9]
  else if (arr.length === 3) 
    return Math.max(arr[0] + arr[2], arr[1]);
  
  else {
    
    arr[1] = Math.max(arr[0], arr[1]);
    for (let i = 2; i < arr.length; i++)
      arr[i] = Math.max(arr[i], arr[i - 1], arr[i] + arr[i - 2]);
    
  }

  return arr[arr.length - 1];
}

// let arr = [3, 7, 4, 6, 5];
// let arr = [-2, 1, 3, -4, 5];
let arr = [-2, 3, 9];
// let arr = [6, -2, -1, 10, -3, -4, -5];

console.log(maxSubsetSum(arr));
