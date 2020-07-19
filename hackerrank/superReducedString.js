function superReducedString(s) {

  let prev = [];
  prev.push (s[0]);

  for (let i = 1; i < s.length; i++) {
    if (s[i] === prev[prev.length - 1]) {
      prev.pop()
    }
    else 
      prev.push(s[i]);
  }

  if (prev.length > 0)
    return prev.join('');
  else
    return 'Empty String';
}

// let s = 'aa';
// let s = 'aaabccddd';
let s = 'kagoyzkgfjnyvjewazalxngpdcfahneqoqgiyjgpzobhaghmgzmnwcmeykqzgajlmuerhhsanpdtmrzibswswzjjbjqytgfewiuu';

console.log(superReducedString(s));
