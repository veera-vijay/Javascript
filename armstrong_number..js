let num=153
let sum=0
let temp=num
let digits=num.toString().length;
while(num>0)
{
    let digit=(num%10)
    sum+=Math.pow(digit,digits)
    num=Math.floor(num/10)

}
if(temp==sum){
    console.log("It is a Armstrong number:"+sum);
}
else{
     console.log("It not  is a Armstrong number:" + sum);
}