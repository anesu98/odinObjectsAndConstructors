
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


// objects that hold the book information
function book (bookName, author, pages, readStatus) {
    this.bookName = bookName;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.info = function() {
        return `${bookName} by ${author}, ${pages} pages, ${readStatus}`
    }
}

// way to add objects to the page

function addBookToLibrary() {

}