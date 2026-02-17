let names=['vijay','veera','arvind']
let result1=names.find((x)=>x.startsWith('a'))
console.log(result1)

let txt=['html','css','javascript']
let ans=txt.find((x)=>x.endsWith('t') || x.endsWith('s'))
console.log(ans)


let numbers=[1,2,3,4,5]
let num=numbers.find((n)=>n>3)
console.log(num)

let char=[
    {name:'vijay',age:24},
    {name:'arvind',age:23},
    {name:'jana',age:20}
]
let result=char.find((x)=>x.age>18)
console.log(result)