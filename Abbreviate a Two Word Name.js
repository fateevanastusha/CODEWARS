function abbrevName(name){
  let letters = name.match(/\b(\w)/g);
  let upperCase = letters[0] + '.' + letters[1];
  return upperCase.toUpperCase()
}