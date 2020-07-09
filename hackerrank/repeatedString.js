function repeatedString(s, n) {
  let result = 0;
  let a_idx = [];
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'a') {
      a_idx.push(Number(i) + 1);
    }
  }
  result = Math.floor (n / s.length) * a_idx.length;
  const remainder = n % s.length;

  console.log (` remainder = ${remainder}  idx=${a_idx}`)
  if (remainder) {
    for (const i in a_idx) {
      if (a_idx[i] <= remainder)
        result += 1;
    }
  }
  return result;
}

console.log(repeatedString('baa', 10));