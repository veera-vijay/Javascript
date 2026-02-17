// // Create a promise
// const myPromise = new Promise((resolve, reject) => {
//   let success = false; // change to false to test rejection

//   setTimeout(() => {
//     if (success) {
//       resolve("Data received successfully!");
//     } else {
//       reject("Something went wrong!");
//     }
//   }, 2000);
// });

// // Use the promise
// myPromise
//   .then((result) => {
//     console.log("Success:", result);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });

// console.log("This prints first, promise resolves later");

let checkEven = new Promise((resolve, reject) => {
  let number = 4;
  if (number % 2 === 0) 
    resolve("The number is even!");
  else 
    reject("The number is odd!");
});
checkEven
  .then((message) => console.log(message))
  .catch((error) => console.error(error));