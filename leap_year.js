// let year=2024
// if((year%4==0 && year%1000!=0)||(year%400==0))
//     console.log("Leap year:"+year)
// else
//     console.log("Not a leap year:"+year)
let start=2020
let end=2026
let count=0
for(let year=start;year<=end;year++)
{
    if((year%4==0 && year%100!=0)||(year%400==0))
{
     
        console.log("Leap year:"+year)
        count++;
}
   
}

console.log(count)