// function sum(a, b) {
//   return a + b;
// }

// function myFunction(input) {
//   if (typeof input !== "number") {
//     throw new Error("Invalid Input");
//   }
// }

// module.exports = myFunction;

// ASYNCHRONOUS CODE

// function fetchData(callback) {
//   setTimeout(() => {
//     callback("peanut butter");
//   }, 1000);
// }

// module.exports = fetchData;

// -------------------xx-----------------------

function fetchPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("peanut butter"), 1000);
  });
}

module.exports = fetchPromise;
