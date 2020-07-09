// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
  let jump = 0;
  let i = 0;
  while (i < c.length-1) {
    // console.log(`i = ${i}   c=${c[i]} ${c.length}`);
    // if (i > 2 && c[i+i] === 0) {
    //   i = i+i;
    // }
    if (c[i + 2] === 0) {
      i += 2;
    }
    else {
      i += 1;
    }
    jump += 1;
  }
  console.log(jump);
}
const arr = [0, 0, 0, 1, 0, 0];
// const arr = [0, 0, 1, 0, 0, 1, 0];
jumpingOnClouds(arr);