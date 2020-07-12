function triplets(a, b, c) {
  a.sort((a, b) => a - b);
  c.sort((a, b) => a - b);

  a = [...new Set(a)];
  b = [...new Set(b)];
  c = [...new Set(c)];

  let bi = 0;
  let total = 0;
  
  while (bi < b.length) {
    let ai = 0;
    let ci = 0;
    while (ai < a.length && a[ai] <= b[bi])
      ai += 1;
    
    while (ci < c.length && c[ci] <= b[bi])
      ci += 1;
    
    total += ai * ci;
    bi += 1;
  }
  return total;
}


const a = [1, 3, 5, 7];
const b = [5, 7, 9];
const c = [7, 9, 11, 13];
// const a = [1, 3, 5];
// const b = [2, 3];
// const c = [1, 2, 3];


console.log (triplets(a, b, c));