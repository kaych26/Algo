function substrCount(n, s) {
  let map = new Map;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      count += 1;

    }
    else if (s[i] === s[i + 2])
      count += 1;
  }

}

let arr = 'abcbaba';

let arr = 'aaaa';