//hoisting
add(6, 4);

function add(a, b) {
  console.log(a + b);
}

function name() {
  return("vijay");
}
console.log(name());

function eligible(a) {
  if (a >= 18) 
    return "eligible for vote";
  else (a<18)
    return "not eligible for vote";
}

console.log(eligible(18));

function str(str){
  return str.toUpperCase()
}
console.log(str("veera vijay"))