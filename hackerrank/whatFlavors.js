function whatFlavors(cost, money) {
  let map = new Map();
  cost.forEach((c, idx) => {
    if (c < money) {

      const diff = money - c;

      console.log (`== diff=${diff}  c=${c}   i=${idx}`)
      if (map.has(diff)) {
        console.log(`c=${c} m=${map.get(diff)} i=${idx}`);
        const answer = [map.get(diff), idx];
        console.log(`+++ ${answer}`);
        return answer;
      }
      else {

        map.set(c, idx);
      }
    }
  });
  // return answer;

}

// console.log(whatFlavors([2, 2, 4, 3], 4));
whatFlavors([2, 2, 4, 3], 4);
