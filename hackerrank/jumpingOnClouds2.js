function jumpingOnClouds(c, k) {
  let end = false;
  let energy = 100;
  let i=0;
  while (!end) {
    i += k;
    if (i === c.length) 
        end = true;
       
    if (i >= c.length)
        i = i % c.length;

    if (c[i] === 1) 
      energy -= 3;
    else
      energy -= 1;
}
  return energy;

}
