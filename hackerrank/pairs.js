function pairs(k, arr) {
  arr.sort;
  let map = new Map();
  let count = 0;
  
  arr.forEach((num, idx) => {
    map.set(num, idx);
  })

  for (let i = arr.length - 1; i >= 0; i--) {
    const diff = arr[i] - k;
    if (map.has(diff))
      count += 1;
  }

  return count;
}

const a = [1, 5, 3, 4, 2];
console.log(pairs(2, a));
