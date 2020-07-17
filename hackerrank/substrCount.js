function substrCount(s) {

  let count = 0;
  let left = [];
  left.push(s[0]);

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      // count += 1;
      left.push(s[i]);
    }
    else if (s[i - 1] === s[i + 1]) {
      count += 1;
    }
    else if (s[i] !== s[i - 1]) {
      let j = i + 1;
      // count += 1;
      while (left.length > 0) {
        const c = left.pop();
        if (c === s[j]) {
          count += 1;
        }
        else {
          
          left = [];
          break;
        }
      }
    }
      
  }
   
  for (let i = 0; i < left.length; i++) {
    count += i;
  }
   
  count += s.length;
  
  console.log(count);
  return count;
}

// let arr = 'abcbaba';
// let arr = 'aaaa';

// let arr = 'aba';
let arr = 'asasd';

substrCount(arr);
