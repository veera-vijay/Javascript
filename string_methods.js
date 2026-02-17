let str="hello world! "
let str1 = "JS is fun. I jkn JS because JS is easy.";

console.log(str.toUpperCase())                    //HELLO WORLD!
console.log(str.toLowerCase())                    //hello world!
console.log(str.split(" "))                       //[ 'hello', 'world!' ]
console.log(str.split("h"))                       //[ '', 'ello world!' ]
console.log(str.split(""))                        //[ 'h', 'e', 'l', 'l','o', ' ', 'w', 'o',v]
console.log(str.replace("world","vijay"))         //hello vijay!
console.log(str1.replaceAll("JS","PYTHON"))       //PYTHON is fun. I love PYTHON because PYTHON is easy.
console.log(str1.split(" ").join("-"))            //JS-is-fun.-I-love-JS-because-JS-is-easy.
console.log(str.length)                           //14
console.log(str.trim())                           // remove the whitespace hello world!
console.log(str.trimEnd())                        // remove the whitespace at the end
console.log(str.trimStart())                      // remove the whitespace at the start
console.log(str.substr(3,5))                      //lo wo
console.log(str.substring(3,7))                   //lo w
console.log(str.charAt("0"))                      // h
console.log(str.indexOf("h"))                     //0
console.log(str.search("h"))                      //0
console.log(str.concat(" ",str1))

function name(str){
    return str.toUpperCase()
}
console.log(name("veera vijay"))


let data=((x)=>{
    return x.toUpperCase()

})
console.log(data("vijay veera"))




