'use strict';

function camelcase(s) {

  let re = /[A-Z]/g;
  let arr = s.match(re);

  if (arr)
    return arr.length + 1;
  else
    return 1;

}

let s = 'save';
// let s = 'saveChangesInTheEditor';
console.log(camelcase(s));