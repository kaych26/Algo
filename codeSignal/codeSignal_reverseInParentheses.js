function reverseInParentheses(inputString) {
  let s = inputString;
  let i = 0;
  let word = [];

  while (i < s.length) {
    if (s[i] === ')') {

      word.push(s[i]);
      const reverse = word.reverse();
      i += 1;
      return reverse;
    }
    else if (s[i] === '(') {
      word.push(s[i]);
      let reverse = reverseInParentheses(s.substring(i + 1, s.length));
      reverse.forEach(l => {  word.push(l); })
      i += reverse.length;
    }
    else {
      word.push(s[i]);
    }
    i += 1;
  }
  
  return word.filter(char=> { return char != '(' && char != ')'}).join('');
}

// console.log(reverseInParentheses("one (ruof ((rht)ee) owt)"));
// console.log(reverseInParentheses("one(abc(xyz))"));
// console.log(reverseInParentheses("foo(bar(baz))blim"));
// console.log(reverseInParentheses("foo(bar(baz))blim(xyz)(abc)foo"));
console.log ('   foo(ab(xy)c)')
console.log(reverseInParentheses("foo(ab(xy)c)"));

console.log ('   foo(bar)baz')
console.log(reverseInParentheses("foo(bar)baz"));




