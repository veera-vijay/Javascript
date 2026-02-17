let numbers=[1,2,3,4,5,2,4]
for(i=0;i<numbers.length;i++)
{
    for(j=i+1;j<numbers.length;j++)
{
    if(numbers[i]==numbers[j])
    {
        console.log(numbers[i])
       
    }
}
    
}

let arr=[12,4,5,4,1,12,1]
let res=arr.filter((value,index)=>{
   return  arr.indexOf(value)!==index
})
console.log(res)
