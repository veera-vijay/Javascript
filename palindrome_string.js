// let str='level'
// let reverese=str.split("").reverse().join("")
// if (str==reverese){
//     console.log(reverese+" it is a palindrome")
// }
// else{
//      console.log("it not  is a palindrome");
// }
let str='level'
let isPlanindrome=true;

for(let i=0;i<=str.length-1;i++)
{
    if(str[i]!==str[str.length-1-i])
    {
        isPlanindrome=false;
        break
    }
}
if (isPlanindrome){
    console.log(str="it is a palindrome")
}
else{
    console.log(str = "it is not  a palindrome");
}
