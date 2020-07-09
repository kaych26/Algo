function minimumBribes(q) {
  let swaps = 0;
  let min = q.length;
  for (var i = q.length - 1; i >= 0; i--){
    // console.log(`q=${q[i]}  q-i ${q[i] - 1}`);
      if (q[i] - i > 3){
          console.log ('Too chaotic');
          // return `Too chaotic`;
      }
      if (q[i] > i+1){
          swaps += (q[i]-(i+1));
      } else {
          if (min > q[i]){
              min = q[i];
          } else if (q[i] != min){
              swaps++;
          }
      }
  }
  
  console.log (swaps);
  // return swaps;
}
const arr = [5, 1, 2, 3, 7, 8, 6, 4];
minimumBribes(arr);

