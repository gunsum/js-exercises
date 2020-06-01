/* 
A person named Alice is defined below. 
Add a method "greet" so this person can say hello.
*/


let person = {
    name: "Alice",
    age: 25,
    greet: function() {
        return "Hellooo everybody!..";
    },
};

person.greet;

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/


console.log(`Expected result: Hello everybody. Actual result: ${person.greet()}`);