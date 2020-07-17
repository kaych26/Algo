function checkMagazine(magazine, note) {
  let map = new Map();
  let flag = 'Yes';
  
    magazine.forEach(word => {
      map.set(word, map.has(word) ? map.get(word) + 1 : 1);
    })
  
    note.forEach(word => {
      if (map.has(word) && map.get(word) > 0) {
        map.set(word, map.get(word) - 1);
      }
      else {
        flag = 'No';
      }
    })
  
    console.log (flag);
    return;
}