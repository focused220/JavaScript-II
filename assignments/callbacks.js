// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  let alength = arr.length;
  return cb(alength);
}
getLength(items, function(output){
  console.log(`getLength() output:\n${output}`);
})

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  let lastItem = arr.pop();
  return cb(lastItem);
}
last(items, function(output){
  console.log(`\nlast() output:\n${output}`);
})

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  let sum = x + y;
  return cb(sum);
}
sumNums(4,5,function(output){
  console.log(`\nsumNums() output:\n${output}`);
})

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  let product = x * y;
  return cb(product);
}
multiplyNums(6,7,function(output){
  console.log(`\nmultiplyNums() output:\n${output}`);
})

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  if(list.includes(item)){
    return cb(true);
  }
  else{
    return cb(false);
  }
}
contains('yo-yo',items,function(output){
  console.log(`\ncontains() output:\n${output}`);
})

/* STRETCH PROBLEM */

const items2 = ['Pencil', 'Notebook', 'yo-yo', 'Gum', 'yo-yo'];

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let holderArray=[];
  for(let i = 0; i < array.length; i++){
    if(!holderArray.includes(array[i])){
      holderArray[i] = array[i];
    };    
  }
  return cb(holderArray);
}

removeDuplicates(items2, function(output){
  console.log(`\nStretch output:\n${output}`);
})

