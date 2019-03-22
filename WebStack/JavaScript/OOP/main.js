// object literal
const book1 = {
  title: "book 1",
  author: "John",
  year: "2013",
  getSummary: function() {
    return `${this.title} written in ${this.year} by ${author}`;
  }
};

// Constructors

function Book(title, author, year) {
  (this.title = title),
    (this.author = author),
    (this.year = year),
    (this.getSummary = function() {
      return `${this.title} written in ${this.year} by ${author}`;
    });
}

// Instatiate an object
const book2 = new Book("B", "A", "2146");

// Prototypes

function Book(title, author, year) {
  (this.title = title), (this.author = author), (this.year = year);
}
// Get summary
Book.prototype.getSummary = function() {
  return `${this.title} written in ${this.year} by ${author}`;
};

// Instatiate an object
const book3 = new Book("B", "A", "2146");

// Inheritance
function Book(title, author, year) {
  (this.title = title), (this.author = author), (this.year = year);
}

function Magazine(title, author, year, month) {
  Book.call(this, title, author, year); // takes from its parent, Book
  this.month = month;
}

// Inherited objects do not inherit prototypes by default
Magazine.prototype = Object.create(Book.prototype);
Magazine.prototype.constructor = Magazine; // change it's constructor

// Object.create
const bookProtos = {
  getSummary: function() {
    return "Foo";
  },
  getAge: function() {
    return "bar";
  }
};

const book4 = Object.create(bookProtos);
book4.title = "Book 4";
book4.author = "Ald";
book4.year = "2104";

// Classes
class Book6 {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return "Fooo";
  }
}

// inherited classes / subclasses
class Mag extends Book6 {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}
