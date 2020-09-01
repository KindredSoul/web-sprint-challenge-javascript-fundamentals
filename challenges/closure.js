// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
// The nested function can acces the variable 'internal' because of the nature scope and how it works with closures. Since myFunction is within the scope of nestedFunction, it has access to all of the variables created within and passed to myFunction, however, myFunction does not have access to any variable created with nestedFunction.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
const summation = num =>{
  let counter = 0
  for(let i=0; i<=num; i++){
    counter+=i
  }
  return counter
}
console.log(summation(4))