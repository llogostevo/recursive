/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
***********************************************************************/

// set i as a default 0 to allow the first passing to occur. 
let sumArray = (array, i=0)=> {
  // check if hte array has reached the end
  if (i==array.length){
    // if it has then there should be no more values added so set the return to 0
    return 0;
  } else {
    // add the current element to the element above
    return array[i]+sumArray(array, (i+1))
  }

};
sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}
