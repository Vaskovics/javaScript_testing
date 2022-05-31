let prom = new Promise((resolve, reject) => {
    let num = Math.random();
    if (num < .5 ){
      resolve('Yay!');
    } else {
      reject('Ohhh noooo!');
    }
  });
   
  const handleSuccess = (resolvedValue) => {
    console.log(resolvedValue);
  };
   
  const handleFailure = (rejectionReason) => {
    console.log(rejectionReason);
  };
   
  prom.then(handleSuccess, handleFailure);












// const factorial = n => {
//     if(n<=1){
//         return 1;
//     }else{return factorial(n-1)*n};
// }   
// console.log(factorial(100));

// console.log("I'm learning about");
 
// for (let idx=0; idx < 999999999; idx++) {}
 
// // The second console.log() statement is
// // delayed by the for loop's execution
// console.log("the Event Loop");

// console.log("I’m learning about");
// setTimeout(() => { console.log("Event Loop");}, 5000);
// console.log("the");

// function greet(){
//     return function bar(){
//     console.log('Hello...');
//     };
// };

// greet();

// const inventory = {
//     sunglasses: 1900,
//     pants: 1088,
//     bags: 1344
//   };
  
//   // Write your code below:
//   const myExecutor = (resolve, reject) => {
//       if (inventory.sunglasses > 0) {
//           resolve('Sunglasses order processed.');
//       } else {
//           reject('That item is sold out.');
//       }
//   };
  
//   const orderSunglasses = () => {
//       return new Promise(myExecutor);
//   };
  
//   const orderPromise = orderSunglasses();
//   console.log(orderPromise);