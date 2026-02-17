let obj={
    name:'veera vijay',age:24, gender:"male",hobbies:["coding","reading"]
}

let jsonstring=JSON.stringify(obj)
console.log(jsonstring)

let parse=JSON.parse(jsonstring)
console.log(parse)

