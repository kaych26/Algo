function palindromeIndex(s) {
  const arr = s.split('')
  console.log(arr)
  let start = 0;
  let end = arr.length - 1
  let mid = Math.floor(arr.length / 2)
  const remove = [];
  let notMatched = 0;

  while (start < end) {
    if (arr[start] === arr[end]) {
      start += 1;
      end -= 1;
    }
    else {
      notMatched += 1;
  

      if (arr[start] === arr[end - 1] && arr[start+1] === arr[end-2]) {
        remove.push(end)
        end -= 3;
        start += 2;
     
      }
      else if (arr[start + 1] === arr[end] && arr[start+2] === arr[end-1]) {
        remove.push(start)
        end -= 2;
        start += 3;
      
      }
    }
  }

  console.log(`REMOVE  `);
  // console.log (remove)
  if (notMatched === 0) {
    return -1
  }
  else if (notMatched > 1) {
    return -1
  }
  // else {
 
    return remove;
  // }

}
// console.log (palindromeIndex('quyjjdcgsvvsgcdjjyq'))
// console.log (palindromeIndex('hgygsvlfwcwnswtuhmyaljkqlqjjqlqkjlaymhutwsnwcflvsgygh'))
console.log (palindromeIndex('hgygsvlfcwnswtuhmyaljkqlqjjqlqkjlaymhutwsnwcwflvsgygh'))