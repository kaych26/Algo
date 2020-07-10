function isValid(s) {
  let map = new Map;
  let min = 0;
  let max=0;
  let maxCount = 0;
  let minCount = 0;

  for (let i = 0; i < s.length; i++) 
    map.set(s[i], map.has(s[i]) ? map.get(s[i]) + 1 : 1);
  
  let val = Array.from(map.values());
  max = Math.max(...val);
  min = Math.min(...val);

  for (let i = val.length-1; i >=0; i-- ) {
      if (val[i] === max)
        maxCount += 1;
      else if (val[i] === min && min !== max)
        minCount += 1;
      else 
        return 'NO';
    }

   if ( minCount > maxCount) {
      if ((s.length - minCount * min) - min <= 1)
        return 'YES';
   }
   else if ( maxCount > minCount) {
      if ((s.length - maxCount * max) - max <= 1)
        return 'YES';
   }
   else if (maxCount === minCount && maxCount === 1)
    return 'YES';

   return 'NO';
}
