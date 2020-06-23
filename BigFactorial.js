const bigFactorial = (n) => {
  
  let i = BigInt(1);
  let result = BigInt(1);

  for (i = BigInt(2); i <= n; i++) {
    result *= i;
  }
  return result.toString();

}

console.log(bigFactorial(25));
console.log(bigFactorial(69));
