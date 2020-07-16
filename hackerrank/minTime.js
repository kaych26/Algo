function minTime(machines, goal) {

  machines.sort((a, b) => a - b);

  console.log(machines);


  let day_num = Math.min(...machines);
  console.log (` day_num = ${day_num}`)
  let prod_made = 0;

  let map = new Map();
  machines.forEach(machine => {
    map.set(machine, map.has(machine) ? map.get(machine) + 1 : 1)
  });

  prod_made = map.get(day_num);

  while (prod_made < goal) {
    day_num += 1;
    for (let [days, prod] of map.entries()) {
      if (day_num % days === 0)
        prod_made += prod;
    }
    
  }
  console.log(day_num);
}

// let m = [2, 3, 2];
// let m = [1, 3, 4];
let m = [3, 2, 3];
let p = 5;

minTime(m, p);
