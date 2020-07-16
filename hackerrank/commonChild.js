function commonChild(s1, s2) {

  
  let s1_map = new Map();
  let s2_map = new Map();
  let idx = 0;
  let match = 0;

  for (let i = 0; i < s1.length; i++) {
    // s1_map.set(s1[i], i);
    s1_map.set(s1[i], s1_map.has(s1[i])? [...s1_map.get(s1[i]), i] : [i]);
  }
  console.log(s1_map);

  for (let j = 0; j < s2.length; j++) {
    if (s1_map.has(s2[j])) {
      const positions = s1_map.get(s2[j]);
      for (p = 0; p < positions.length; p++){
        if (positions[p] > idx) {
          console.log (`s2=${s2[j]}  position= ${positions[p]}  idx=${idx}`)
          match += 1;
          idx = positions[p];
          break;
        }
      }
    }
      
  }

  return match;
}

const s1 = 'WEWOUCUIDGCGTRMEZEPXZFEJWISRSBBSYXAYDFEJJDLEBVHHKS';
const s2 = 'FDAGCXGKCTKWNECHMRXZWMLRYUCOCZHJRRJBOAJOQJZZVUYXIC';


// const s1 = 'SHINCHAN';
// const s2 = '



NOHARAAA';
console.log(commonChild(s1, s2));