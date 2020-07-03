/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
 
 


function exerciseOne(arrayOfPeople) { //arrayi cagiriyorum niye cagiriyorum bir islem yapacam


let content = document.querySelector("#content");//domdan bir eleman 

  arrayOfPeople.forEach(person => {
     console.log(person);

     let nameHeading = document.createElement("h1");
     nameHeading.innerText = person.name;
     content.appendChild(nameHeading);

     let jobHeading = document.createElement("h2");
     jobHeading.innerText = person.job;
     content.appendChild(jobHeading);
  } );
}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shoppingItems) {

  let content = document.querySelector("#content");

  let newUl =document.createElement("ul");
  content.appendChild(newUl);

  shoppingItems.forEach(item =>{
    console.log(item);

  let newLi = document.createElement("li");
  newLi.innerText= item;
  newUl.appendChild(newLi);
  
  })

  //Write your code in here
}

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false,
            coverImageUrl: "assets/design_of_things.jpeg"
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true,
            coverImageUrl: "assets/most_human_human.jpeg"
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true,
            coverImageUrl: "assets/pragmatic_programmer.jpeg"
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    
    
**/
function exerciseThree(booksArray) {

  let content = document.querySelector("#content");

  let ulElement = document.createElement("ul");
  content.appendChild(ulElement);
  

  booksArray.forEach(book => {
    let liElement = document.createElement("li");
    ulElement.appendChild(liElement);
    let bookParagraphTitleAuthor = document.createElement("p");
    let bookStyle;
    if(book.alreadyRead){
      bookStyle = "readBook";
    }else {
       bookStyle = "unReadBook";
    }  
    }
       
    bookParagraphTitleAuthor.className = bookStyle,//setting class attribute so we say "className"
     
    bookParagraphTitleAuthor.innerText = `${book.title} - ${book.author}`);
    liElement.appendChild(bookParagraphTitleAuthor); 

    let bookImg = document.createElement("img");
    bookImg.src = book.coverImageUrl;
    liElement.appendChild(bookImg);
  }  
  //Write your code in here

}
//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];


exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    coverImageUrl: "assets/design_of_things.jpeg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    coverImageUrl: "assets/most_human_human.jpeg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    coverImageUrl: "assets/pragmatic_programmer.jpeg",
  },
];

exerciseThree(books);

