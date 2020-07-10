function alternatingCharacters(s) {
  let remove = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1])
      remove += 1;
  }
  return remove;
}
