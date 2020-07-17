'use strict';

function circularArrayRotation(a, k, queries) {
  let result = [];

  for (let i = 0; i < k; i++) {
    const last = a.pop();
    a.unshift(last);
  }

  for (let j = 0; j < queries.length; j++) {
    result.push(a[queries[j]]);
  }

  return result;
}

const a = [1, 2, 3];
// rotate 2 times
const k = 2;
const queries = [0, 1, 2];

console.log(circularArrayRotation(a, k, queries));