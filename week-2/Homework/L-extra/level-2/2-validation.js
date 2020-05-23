// Complete the function to check if the variable `num` satisfies the following requirements:
// - is a number
// - is a positive number
// - is less than or equal to 100
// Tip: write other small functions for each requirement

function validate1(num) {
  let numType = typeof num;
  return numType === "number";
}

function validate2(num) {
  return num > 0;
}

function validate3(num) {
  return num <= 100;
}


function validate(num) {
  if (validate1(num) === true && validate2(num) === true && validate3(num) === true) {
    return true;
  }else {
    return false;
  }
}
/*
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log(validate(10));
console.log(validate(10.5));
console.log(validate(101));
console.log(validate(-12));
console.log(validate("16"));

/*
  EXPECTED RESULT
  ---------------
  true
  true
  false
  false
  false
*/
