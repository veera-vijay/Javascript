let numbers=[1,2,3,4]
let [one,,,four]=numbers
console.log(one,four)




// let str={
//     name:'vijay',age:24,gender:"male"
// }
// let {name1,gender}=str
// console.log(name,gender)




let details= {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
   }

let {
    id,
    username,
    name,
    email,
    address:{street,suite,city,zipcode,geo:{lat,lng}},phone,website,company:{name:n,catchPhrase,bs}

}=details
console.log("id: "+id ,"name: "+name,"username: "+username,"email :"+email,"street: "+street,"suite: "+suite,"city: "+city,"zipcode: "+zipcode,
    "lat: "+lat,"lng: "+lng,"phone: "+phone,"website: "+website,"comapny name: "+n,"catchPhrase: "+catchPhrase,"bs: "+bs
)

