// Book Class: represents book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI Class: handles UI tasks
class UI {
  static displayBooks() {
    const StoredBooks = Store.getBooks();
    const books = StoredBooks;

    books.forEach(book => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector(".book-list"); // grab onto list element

    const row = document.createElement("tr"); // creates new row in table/book-list

    // templates the row
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;

    // appends new row onto the list
    list.appendChild(row);
  }

  static deleteBook(el) {
    // confirm targeted element is a delete button (has delete class)
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove(); // removes the parent element of the tds, the tr
    }
  }

  // Create alert message from scratch
  static showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message)); // create the div's text
    const container = document.querySelector(".container"); // select parent, where the div will go
    const form = document.querySelector("#book-form"); // select element the div will go before
    container.insertBefore(div, form); // append div above form, inside container

    // Remove alert after 3 seconds
    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 3000);
  }

  static clearForm() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
}

// Store Class: Handles storage
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem("books", JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();

    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem("books", JSON.stringify(books));
  }
}

// Event: display books
document.addEventListener("DOMContentLoaded", UI.displayBooks); // loads book from storage when dom is loaded

// Event: Add a book
document.querySelector("#book-form").addEventListener("submit", e => {
  e.preventDefault();

  // Get form values:
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  // Validate
  if (title === "" || author === "" || isbn === "") {
    UI.showAlert("Please fill in all fields", "danger");
  } else {
    // Instatiate book
    const book = new Book(title, author, isbn);

    // Add book to UI
    UI.addBookToList(book);

    // Add book to store
    Store.addBook(book);

    // Show success message
    UI.showAlert("Book added!", "success");

    // Clear form
    UI.clearForm();
  }
});

// Event: remove a book - target delete button using event propagation (e.target)
document.querySelector(".book-list").addEventListener("click", e => {
  // Remove book from UI
  UI.deleteBook(e.target);

  // Remove book from Store - get book isbn by traversing the dom
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // Show success message
  UI.showAlert("Book removed!", "info");
});
