// 1. Write a function (`capitalise`) that capitalises the first letter of a provided string
// 2. Declare a new array (`mentorsTidy`) containing:
//    - every item from `mentors` run through the `tidyUpString` function
//    - every resulting item run through the `capitalise` function

function tidyUpString(str) {
  return str
    .trim()
    .toLowerCase()
    .replace("/", "");
}

function capitalise(str) {
 let finalItem = str
            .charAt(0)
            .toUpperCase()// complete this function
            + str
            .slice(1);
  return finalItem;          
}

var mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];

var mentorsTidy = mentors.map(tidyUpString);
var mentorsTidyAndCapitalised = mentorsTidy.map(capitalise);

console.log(mentorsTidyAndCapitalised);

/*
  EXPECTED RESULT
  ---------------
  ["Daniel", "Irina", "Gordon", "Ashleigh"]
*/
