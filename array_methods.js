let num=[1,2,3,4,5]
num.unshift(2)
console.log("unshift:",num)         ///unshift: [ 2, 1, 2, 3, 4, 5 ]
num.shift();
console.log("shift:", num);         //shift: [ 1, 2, 3, 4, 5 ]
num.pop(); 
console.log("pop:", num);           //pop: [ 1, 2, 3, 4 ]
num.push(8);
console.log("push:", num);          //push: [ 1, 2, 3, 4, 8 ]