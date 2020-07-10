function makeAnagram(a, b) {
  let map = new Map;
  let remove = 0;
  
  for (let i = 0; i < a.length; i++) {
    if (map.has(a[i]))
      map.set(a[i], map.get(a[i])+1);
    else 
      map.set(a[i], 1);
  }

  for (let j=0; j< b.length; j++) {
    if (map.has(b[j]) && map.get(b[j]) > 0)
      map.set(b[j], map.get(b[j])-1);
    else
      remove += 1;
  }

  for (let value of map.values()) {
    if (value > 0 )
      remove += value;
  }
  return remove;
}

let a = ['c', 'd', 'e'];
let b = ['a', 'b', 'c'];

console.log(makeAnagram(a, b));