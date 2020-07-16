function minimumAbsoluteDifference(arr) {

  // sort the array and iterate to check each diff
  arr.sort((a,b)=>a-b);
  let minDiff;

  // Loop through the consecutive pairs, if 0 return, else set min diff
  for (let i = 0; i < arr.length-1; i++) {
    let absDiff = Math.abs(arr[i] - arr[i+1]);
 
    if (!minDiff || absDiff < minDiff) minDiff = absDiff;
    
    // one test case failed without this checking
    if (minDiff === 0) return 0;
  }

  return minDiff;

}