
// /*  Testing the js document by manipulating the DOM */
// function sayHello() {

//     const body = document.querySelector('body')
//     const div = document.createElement('div');
//     div.classList.add('greeting');
//     div.textContent = `Hi, welcome to the site!`
//     body.appendChild(div);

// }

// sayHello()


// the exercise

// function addBook (bookName, author, pages, readStatus) {
//     this.bookName = bookName;
//     this.author = author;
//     this.pages = pages;
//     this.readStatus = readStatus;
//     this.info = function() {
//         return `${bookName} by ${author}, ${pages} pages, ${readStatus}`
//     }
// }

// let theHobbit = new addBook('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet')


// testing

// console.log(theHobbit.info());


// expalining how to use prototypes

//putting functions in prototypes reduces memory taken. what I am going to put a prototype for

/*
function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.statePlayer = function() {
        return `${name}, ${marker}`
    }
} */

//making the above code use prototypes for the function
// function Player(name, marker) {
//     this.name = name;
//     this.marker = marker;
// }

// // accessing the prototype
// Player.prototype.statePlayer = function() {
//     return `My name is ${this.name}. My marker is '${this.marker}'`
// }

// // creating the individual player objects
// const player1 = new Player('steve', 'X')
// const player2 = new Player('Jackson', 'O')

// // test
// console.log(player1.statePlayer());
// console.log(player2.statePlayer());



// making a library

//library info
let myLibrary = [];


// Constructor function for book objects
function Book(bookName, author, pages, readStatus) {
    this.bookName = bookName;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
  }
  
  // Prototype method for book objects
  Book.prototype.info = function() {
    return `${this.bookName} by ${this.author}, ${this.pages} pages, ${this.readStatus}`;
  };
  
  // Event listener for the form submission
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission from refreshing the page
  
    // Retrieve form data
    var bookName = document.getElementById('bookName').value;
    var author = document.getElementById('author').value;
    var pages = document.getElementById('pages').value;
    var readStatus = document.getElementById('readStatus').checked;
  
    // Create new book object
    var newBook = new Book(bookName, author, pages, readStatus);
  
    // Add new book object to myLibrary array
    myLibrary.push(newBook);
  
  
    //Reset the form fields
    event.target.reset();
  });