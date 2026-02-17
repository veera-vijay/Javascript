let jsondatas;
new Promise((resolve, reject) => {
  fetch("https://jsonplaceholder.typicode.com/posts") .then((response) => response.json()).then((data) => {
      jsondatas = data; 
      resolve(data);
    });
   
    
})

  .catch((error) => reject(error))

  .then((res) => {
    console.log("Stored JSON in jsonData variable:");
    console.log(jsondatas); // now accessible here
  })
  .catch((error) => console.log("Error:", error.message));
