/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
   console.log(document.querySelectorAll("p"));
   console.log(document.querySelector(".site-header"));
   console.log(document.querySelector("#jumbotron-text"));
   console.log(document.querySelectorAll(".primary-content p"));
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
document.querySelector("#alertBtn").addEventListener("click", popUpAlert)
function popUpAlert() {
    alert("Thanks for visiting Bikes for Refugees!");
}
/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
document.querySelector("#bgrChangeBtn").addEventListener("click", changeColor);
//function changeColor(){
    //var myColor = document.querySelector("#bgrChangeBtn")//but first you create var with document.querySelector("#bgrChangeBtn") getting the button
    //myColor.style.backgroundColor = "red"; //what i want to do with this button for example chnging color
//}

function changeColor(event){//argument
    event.target.style.backgroundColor = "red";
}
/*
Task 4
======


When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
document.querySelector("#addTextBtn").addEventListener("click",addTextBtn);
function addTextBtn(event){
    event.target.innerText = "Read more below";
}

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
//document.querySelectorAll("#largerLinksBtn").addEventListener("click",largerLinksBtn);
//function largerLinksBtn(event) {
 //  event.style.fontSize = 200%
//}

let textSizeIncrement = document.querySelector('#largerLinksBtn');
   textSizeIncrement.addEventListener('click',largerLinkBtn)
       function largerLinkBtn(){
           document.querySelectorAll("a").forEach((element)=>
           {
               element.style.fontSize = "200%"});
       }
   
/*
Task 6
======

Using JavaScript, create an unordered list under the "Add" button.
When the "Add" button is pressed, get the value of the text box on its left, and add it to the list you created above.
*/

document.querySelector("#addArticleBtn").addEventListener("click",addArticleBtn);
function addArticleBtn(){
 var text = document.querySelector(".addArticle").value//we get the text textbox 
 var incText = document.createElement("p")//creating an empty paragr
 incText.innerText = text//we make the paragr contained text from the textbox
 document.querySelector("#addArticlesDiv").appendChild(incText)//we add the paragrap in this line if you dont this line you can't see anything
}
