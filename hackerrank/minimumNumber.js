'use strict';

function minimumNumber(n, password) {

  let match = 0;
  let capital = /[A-Z]/g;
  let lower = /[a-z]/;
  let special = /[!@#$%^&*()\-+]/;
  let num = /[0-9]/;
  const MIN = 6;

    if (capital.test(password))
      match += 1;

    if (lower.test(password)) 
      match += 1;
    
    if (special.test(password))
      match += 1;
    
    if (num.test(password))
      match += 1;

  console.log(match);

  if (password.length >= MIN) {
    if (match >= 4)
      return 0;
    else
      return 4 - match;
  }
  else {
    
    const missing = 4 - match;
    const len = MIN - password.length;
    // return num of missing special char or minimin len
    return Math.max(missing, len);
  }
    
    
}
let n = 1;
// let p = 'Ab1';
// let p = '#HackerRank';
// let p = 'Ab###1'
let p = 'AUzs-nV';
console.log(minimumNumber(n, p));

