/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval.

================
*/
var color = "orange";



setInterval(function(){
   console.log('hello');
   document.body.style.backgroundColor = color;

   if(color === "orange"){
       color = "blue";
       }else {
           color = "red";
    
       }

},5000);
