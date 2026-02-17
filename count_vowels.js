let str='veeravijay'
let count=0
let vowels='aeiou'
let found=[]
for(let i=0;i<str.length;i++)
{
    let ch=str[i].toLowerCase()
    if(vowels.includes(ch)){
    count++
    found.push(ch)

}

}
console.log(count)
console.log(found.join(",")
)
