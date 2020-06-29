

function reverseInParentheses(inputString) {
  let s = inputString;
  let result = '';

  const reverseParen = (w) => {
    let word = [];
    let j=0

    while (j < w.length ) {
      const letter = w[j];
      if (letter === ')') {
        // const rr = word.reverse().join('');
        const rr = word.reverse();
        j += 1;
        return rr;
        
      }
      else if (letter === '(') {
        // j += 1;
        const reverse = reverseParen(w.substring(j+1, w.length));
        
        reverse.forEach(l => { word.push(l); })
        j += reverse.length+1;
      }
      else {
        word.push(letter);
      }
      j += 1;
    }
  }

  let i = 0;
  while (i < s.length) {
    if (s[i] !== '(' && s[i] !== ')') {
      result += s[i];
    }
    else {
      // const reversed = reverseParen(s.substring(i+1, s.length)).join('');
      const reverse = reverseParen(s.substring(i + 1, s.length));
 
      result += reverse.join();
      i += reverse.length+1;
      // i += 1;
    }
    i += 1;
  }
  return result;
}

// function reverseInParentheses(inputString) {
//   let str = inputString;

//   (str.match(/\((.+)\)/g) || []).forEach(a => {
//     a = a.substring(1, a.length - 1);
//     let b = reverseInParentheses(a)
//         // .replace(/[\(\)]/g, function ($1) { return $1 === '(' ? ')' : '(' })
//         .split("").reverse().join("");
//     str = str.replace(a, b);
// });
// return str;

// }

// console.log(reverseInParentheses("one (ruof ((rht)ee) owt)"));
// console.log(reverseInParentheses("one(abc(xyz))"));
// console.log(reverseInParentheses("foo(bar(baz))blim"));
// console.log(reverseInParentheses("foo(bar(baz))blim(xyz)(abc)foo"));
console.log(reverseInParentheses("foo(ab(xy)c)"));



