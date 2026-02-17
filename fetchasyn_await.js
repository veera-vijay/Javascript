async function datas(url) {
    try{
        const data=await fetch(url)
        const convertData= await data.json()
        console.log(convertData)


    }
    catch(e){
        console.log("erroris occured",e.message)
    }
}
datas("https://jsonplaceholder.typicode.com/posts");