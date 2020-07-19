'use strict';

function libraryFine(d1, m1, y1, d2, m2, y2) {

  let fine = 0;
  console.log (`d1=${d1}  m1=${m1}  y1=${y1}  d2=${d2}  m2=${m2}  y2=${y2}`)
  if (y2 === y1) {
    if (m2 === m1) {
      const days = d1 - d2;
      console.log (`days= ${days}`)
      if (days > 0) {
        fine = days * 15;
      }
    }
    else {
      const months = m1 - m2;
      if (months > 0) {
        fine = months * 500;
      }
    }
  }
  else if (y1 > y2){
    fine = 10000;

  }
  return fine;

}

console.log(libraryFine(9, 6, 2015, 6, 6, 2015));


