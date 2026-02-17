// const add=(a,b) => a+b;
// console.log(add(5,5))

// const fun=(a,b)=>{
//     if(a+b>=10)
//         return'greater'
// }
// console.log(fun(3,8))


// let value=(a,b)=>
// {
//     if(a-b>=0)
//         return 'equal'
//     else
//         return 'not'
// }
// console.log(value(5,5));


// let multiply=(a,b)=>(a*b)
// console.log(multiply(5,6))

//  setInterval(() => {
//      console.log("hi")    // it is print again and again after 3sec
    
//  }, 3000);

// setTimeout(()=>{
//     console.log("after 1 sec")   //after 1 sec one time only 

// },1000)
console.log("start")
setTimeout(()=>{
    console.log("center")
},2000)

console.log("end")


const a=(x)=>x*2
console.log(a(6))


let name=((name)=>{
    return name.toUpperCase()
})
console.log(name('veera vijay'))