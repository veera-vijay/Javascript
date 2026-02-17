//inialization
let a = 10;
console.log(a);

//declare

let b;
b = 4;
console.log(b);

//redeclare is not possible
// let red = 10;
//                           //SyntaxError: Identifier 'red' has already been declared

// let red = 20;

//reassign is possible
let c = 20;
c = 30;
console.log(c);

//hosting is not possible

//  d=30;                             // ReferenceError: Cannot access 'd' before initialization
//  console.log(d)
//   let d;

//block function

function test() {
  let a = 5; //outside block it will throw reference error

  let z = 10;
  console.log(a);
  console.log(z);
}

test();
