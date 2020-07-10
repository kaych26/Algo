function permutationEquation(p) {
    
  let map = new Map();
  let i = 0;
  let result = [];

  p.forEach((num, idx) => {
    console.log(`num=${num} idx=${idx+1}`);
    map.set(num, idx+1);
  });

  for (let i = 1; i <= p.length; i++) {
    result.push(map.get(map.get(i)));
  }

  return result;

  console.log(result);


}

let arr = [2, 3, 1];
console.log(permutationEquation(arr));