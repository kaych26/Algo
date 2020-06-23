function diagonalDifference(arr) {
  // Write your code here
  let first_sum = 0;
  let second_sum = 0;
  let end = arr.length;

  console.log(first_sum)
  for (let i = 0; i < arr.length; i += 1) {
    first_sum += arr[i][i];

    second_sum += arr[i][end];
    end -= 1;
    console.log (arr[i][i])
    console.log (first_sum)
  }
  }

  diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]])