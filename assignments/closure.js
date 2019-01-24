// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let array = [1,2,3,4,5];
function closureLevelOne(){
  console.log(`Challenge 1 Output:\n-closureLevelOne() access: ${array}`);
  closureLevelTwo();
  function closureLevelTwo(){
    let total = array.reduce(function(acc, val){
      return acc + val;
    })
    console.log(`\n-closureLevelTwo access: Total = ${total}`);
    closureLevelThree();
    function closureLevelThree(){
      console.log(`\n-closureLevelThree access: Element 3 is ${array[3]}`);
    }
  }
}
closureLevelOne();


// ==== Challenge 2: Create a counter function ====
const counter = (x) => {
  // Return a function that when invoked increments and returns a counter variable.
  x++;
  return x;
};
console.log(`\nChallenge 2 Output:\n${counter(1)}`);
//Example usage: const newCounter = counter();
//newCounter() // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = (x) => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counter = x;
  function increment(counter){
    counter++;
    return counter;
  };

  function decrement(){
    counter--;
    return counter;
  };
  //console.log(counter);
};

