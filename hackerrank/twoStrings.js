function twoStrings(s1, s2) {
  let map = new Map();
  let common = [];

  for (let i = 0; i < s1.length; i++) {
    map.set(s1[i]);
  }
  for (let j = 0; j < s2.length; j++) {
    if (map.has(s2[j]))
      common.push(s2[j])
  }

  if (common.length > 0) {
    console.log('YES');
  
  }
  else {
    console.log('NO');
  }
}