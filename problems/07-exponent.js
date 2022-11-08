/***********************************************************************
Write a recursive function called `exponent` that takes two integers, 
`num` and `power`, and returns `num` raised to the `power`th power. Your
function should work when `num` or `power` are positive OR negative.

Exponents are used to represent a number being multiplied by itself a
given number of times:

4^3 = 4 x 4 x 4 = 64

Negative exponents represent the same action, but in the denominator instead
of the numerator:

4^-3 = (1/4) * (1/4) * (1/4) = 1/64.

Examples:

exponent(3, 2); // 9
exponent(2, -2); // 1/4 (or 0.25)
exponent(5, 5); // 3125
***********************************************************************/

function exponent(b, n, total=1, counter = 0, flag=false) {
  // your code here
  if (n == counter && flag==false){
    // this also works if n=0 as power of 0 is 1
    return total;
  } else if (n == counter && flag==true){
      // this captures negative powers using the flag
      return (1/total);
  } else if (n>0) {
    // captures positive n
    total=total*b;
    counter = counter+1;
    return exponent(b, n, total, counter);
  } else if (n<0) {
    // captures negative n
    total=total*b;
    counter = counter-1;
    // flag tracks that the exponent is negative
    return exponent(b, n, total, counter, true);
  } 
}
  
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = exponent;
} catch (e) {
  module.exports = null;
}
