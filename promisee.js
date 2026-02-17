// let student=new Promise(function(resolve,reject)
// {
//    let mark=60
//    if(mark>35)
//    {
//     resolve("you will pass")
//    }
//    else
//     reject("you will fail")


// })
// student
//   .then(function (result) {
//     console.log("result:" + result);
//   })
//   .catch(function (error) {
//     console.log("result:" + error);
//   });


let food= new Promise(function(resolve,reject){
    let pizaadelevired=true

    if(pizaadelevired)
    {
        resolve("your pizza is delevired")

    }
    else
    {
        reject("your pizza is not delevired")
    }
})

food
.then(function(msg)
{
    console.log(msg)
    console.log(" thanks for ordered")
})


.catch((error)=>(console.error("sorry")

))





