
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


// Making a library
// Making a library
let myLibrary = [];

function Book(bookName, author, pages, readStatus) {
  this.bookName = bookName;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

Book.prototype.info = function() {
  return `${this.bookName} by ${this.author}, ${this.pages} pages, ${this.readStatus}`;
};

// Event listener for the form submission
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const bookListElement = document.getElementById('bookList');
  const bookCountElement = document.getElementById('bookCount');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const bookName = document.getElementById('bookName').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const readStatus = document.getElementById('readStatus').checked;

    const newBook = new Book(bookName, author, pages, readStatus);

    myLibrary.push(newBook);


    // Add the new book to the bookList element
    const newBookElement = document.createElement('div');
    newBookElement.classList.add('book');

    const bookInfoElement = document.createElement('div');
    bookInfoElement.classList.add('book-info');

    const bookNameElement = document.createElement('p');
    bookNameElement.textContent = `Book Name: ${bookName}`;
    bookInfoElement.appendChild(bookNameElement);

    const authorElement = document.createElement('p');
    authorElement.textContent = `Author: ${author}`;
    bookInfoElement.appendChild(authorElement);

    const pagesElement = document.createElement('p');
    pagesElement.textContent = `Pages: ${pages}`;
    bookInfoElement.appendChild(pagesElement);

    const readStatusElement = document.createElement('p');
    readStatusElement.textContent = `Read Status: ${readStatus ? 'Read' : 'Unread'}`;
    bookInfoElement.appendChild(readStatusElement);

    newBookElement.appendChild(bookInfoElement);

    const editDiv = document.createElement('div');
    editDiv.classList.add('edit');

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn');
    removeButton.addEventListener('click', function() {
      removeBook(newBook);
    });
    editDiv.appendChild(removeButton);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-btn');
    editButton.addEventListener('click', function() {
      editBook(newBook);
    });
    editDiv.appendChild(editButton);

    const changeStatusButton = document.createElement('button');
    changeStatusButton.textContent = 'Change Status';
    changeStatusButton.classList.add('change-status-btn');
    changeStatusButton.addEventListener('click', function() {
      toggleReadStatus(newBook);
    });
    editDiv.appendChild(changeStatusButton);

    newBookElement.appendChild(editDiv);

    bookListElement.appendChild(newBookElement);

    // Check if scroll is needed and update the bookList style
    const maxHeight = 400; // Maximum height of the bookList in pixels

    if (bookListElement.scrollHeight > maxHeight) {
      bookListElement.style.overflowY = 'scroll';
    } else {
      bookListElement.style.overflowY = 'auto';
    }

    // Update the book count
    const bookCount = myLibrary.length;
    if (bookCount === 1) {
      bookCountElement.textContent = `${bookCount} book`;
    } else {
      bookCountElement.textContent = `${bookCount} books`;
    }

    form.reset();
  });

  function removeBook(book) {
    const bookIndex = myLibrary.indexOf(book);
    if (bookIndex !== -1) {
      myLibrary.splice(bookIndex, 1);
      updateBookList();
    }
  }

  function toggleReadStatus(book) {
    book.readStatus = !book.readStatus;
    updateBookList();
  }

  function editBook(book) {
    const newBookName = prompt('Enter the new name for the book:');
    const newAuthor = prompt('Enter the new author for the book:');
    const newPages = prompt('Enter the new number of pages for the book:');

    if (newBookName && newAuthor && newPages) {
      book.bookName = newBookName;
      book.author = newAuthor;
      book.pages = newPages;
      updateBookList();
    }
  }

  function updateBookList() {
    while (bookListElement.firstChild) {
      bookListElement.removeChild(bookListElement.firstChild);
    }

    myLibrary.forEach(function(book) {
      const newBookElement = document.createElement('div');
      newBookElement.classList.add('book');

      const bookInfoElement = document.createElement('div');
      bookInfoElement.classList.add('book-info');

      const bookNameElement = document.createElement('p');
      bookNameElement.textContent = `Book Name: ${book.bookName}`;
      bookInfoElement.appendChild(bookNameElement);

      const authorElement = document.createElement('p');
      authorElement.textContent = `Author: ${book.author}`;
      bookInfoElement.appendChild(authorElement);

      const pagesElement = document.createElement('p');
      pagesElement.textContent = `Pages: ${book.pages}`;
      bookInfoElement.appendChild(pagesElement);

      const readStatusElement = document.createElement('p');
      readStatusElement.textContent = `Read Status: ${book.readStatus ? 'Read' : 'Unread'}`;
      bookInfoElement.appendChild(readStatusElement);

      newBookElement.appendChild(bookInfoElement);

      const editDiv = document.createElement('div');
      editDiv.classList.add('edit');

      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.classList.add('remove-btn');
      removeButton.addEventListener('click', function() {
        removeBook(book);
      });
      editDiv.appendChild(removeButton);

      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.classList.add('edit-btn');
      editButton.addEventListener('click', function() {
        editBook(book);
      });
      editDiv.appendChild(editButton);

      const changeStatusButton = document.createElement('button');
      changeStatusButton.textContent = 'Change Status';
      changeStatusButton.classList.add('change-status-btn');
      changeStatusButton.addEventListener('click', function() {
        toggleReadStatus(book);
      });
      editDiv.appendChild(changeStatusButton);

      newBookElement.appendChild(editDiv);

      bookListElement.appendChild(newBookElement);
    });

    // Check if scroll is needed and update the bookList style
    const maxHeight = 400; // Maximum height of the bookList in pixels

    if (bookListElement.scrollHeight > maxHeight) {
      bookListElement.style.overflowY = 'scroll';
    } else {
      bookListElement.style.overflowY = 'auto';
    }

    // Update the book count
    const bookCount = myLibrary.length;
    if (bookCount === 1) {
      bookCountElement.textContent = `${bookCount} book`;
    } else {
      bookCountElement.textContent = `${bookCount} books`;
    }
  }
});