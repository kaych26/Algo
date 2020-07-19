'use strict';

function cutTheSticks(arr) {

  const result = [];
  arr.sort((a, b) => b - a);

  while (arr.length > 0) {
    result.push(arr.length);
    let shortest = arr.pop();
    
    for (let i = arr.length-1; i >= 0; i--) {
      if (arr[i] === shortest)
        arr.pop();
      else 
        arr[i] -= shortest;
    }
  }
  return result;
}

// let arr = [5, 4, 4, 2, 2, 8];
// let arr = [1, 2, 3, 4, 43, 3, 2, 1];
let arr = [5, 5, 4, 2];

console.log(cutTheSticks(arr));

