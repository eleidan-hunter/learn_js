function r4() {
  let key = '';
  for (let i = 0; i < 4; i++) {
    key += Math.random().toString(36).replace('0.', '');
  }
  return key;
}
