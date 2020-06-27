/* Hackerank - Picking Numbers */

const pickingNumbers = (a) => {
  let arr = Array(100).fill(0);
  let max = 0;

  for (let i=0; i< a.length; i++) {
    arr[a[i]] += 1;
  }
  for (let j = 0; j < arr.length-1; j++) {
    const total = arr[j] + arr[j + 1];
    if (total > max)
      max = total;
  }
  return max
  
}
const s = '4 2 3 4 4 9 98 98 3 3 3 4 2 98 1 98 98 1 1 4 98 2 98 3 9 9 3 1 4 1 98 9 9 2 9 4 2 2 9 98 4 98 1 3 4 9 1 98 98 4 2 3 98 98 1 99 9 98 98 3 98 98 4 98 2 98 4 2 1 1 9 2 4';

const arr = s.split(' ');
console.log(pickingNumbers(arr));
