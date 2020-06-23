function appendAndDelete(s, t, k) {
    
  let idx=0;
  let count=0;
  let t_length=0;
  const minLength = Math.min(s.length, t.length);

  while (idx < minLength) {
      if (s[idx] === t[idx]) {
          idx+=1;
          count += 1;
      }  
      else 
          break;
  }

  t_length = s.length + t.length;
  if (t_length <= 2*count + k && t_length % 2 === k%2 || t_length < k)
      return 'Yes'
  else
      return 'No' 
}

const s = 'hackerhappy';
const t = 'hackerrank';
const k= 9

appendAndDelete(s, t, k)
