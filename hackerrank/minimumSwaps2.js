function minimumSwaps(arr) {
  let swap = 0;
  let count = 0;
  let checkArr = new Array(arr.length).fill(0);

  for (let i = 0; i < arr.length; i++) {

    let num = arr[i] - 1;
    if (checkArr[i]) {
      continue;
    }
    else if (num === i )  {
      checkArr[num] = 1;
    }
    else   {
      while (!checkArr[num]) {
        checkArr[num] = 1;
        num = arr[num]-1;
        count += 1;
      }
      swap += count-1;
      count = 0;
    }
    
  }
  return swap;
}
console.log(minimumSwaps([1, 3, 2, 4]));