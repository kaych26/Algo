function luckBalance(k, contests) {
  const important = [];
  let luck = 0;
  
  for (let i = 0; i < contests.length; i++) {
      if (contests[i][1])
          important.push(contests[i][0]);
      else 
          luck += contests[i][0];
  }

  important.sort((a, b)=> a-b);

  let j=0;
  while (important.length > 0 && j < k) {
      luck += important.pop();
      j += 1;
  }

  while (important.length > 0) {
      luck -= important.pop();
  }
  return luck;

}