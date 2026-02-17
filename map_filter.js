//map
const numbers=[1,2,3,4,5]
let result=numbers.map((num)=>num*2)
console.log(result)

//filter

let resultfilter=numbers.filter((num)=>num%2==0)
console.log(resultfilter)

let datas = [
    { name: "vijay", age: 24 },
    { name: "veera" , age: 17 }
];
let filterdata = datas
.filter((x) => x.age > 18)
.map((x) => x.name);
console.log(filterdata)



let arr=[2,5,7,3,8,6]
let res=arr.filter((num)=>{
          if(num>1){
            for(i=2;i<num;i++){
                if(num%i==0){
                    return false;
                }
            }
          }
          return true;
});
console.log(res)
