
console.log("Hello, Airtable");

var Airtable = require("airtable");
console.log(Airtable);

var base = new Airtable({ apiKey: "key4Jc4fqyYdDCwcd" }).base(
  "appiqsEYrTVSOEttD"
);

base("books").select({}).eachPage(gotPageOfBooks, gotAllBooks);

const books = [];

function gotPageOfBooks(records, fetchNextPage) {
  console.log("gotPageOfBooks()");
  books.push(...records);
  fetchNextPage();
}

function gotAllBooks(err) {
  console.log("gotAllBooks()");

  if (err) {
    console.log("error loading books");
    console.error(err);
    return;
  }

  consoleLogBooks();
  showBooks();
}

function consoleLogBooks() {
  console.log("consoleLogBooks()");
  books.forEach((book) => {
    console.log("Book:", book);
  });
}

function showBooks() {
  console.log("showBooks()");
  books.forEach((book) => {
    const h1 = document.createElement("h1");
    h2.innerText = book.fields.title;
    document.body.appendChild(h1);
  });
}


function showBooks() {
  console.log("showBooks()");

  const shelf = document.getElementById("shelf");

  books.forEach((book) => {
    const div = document.createElement("div");
    div.innerText = book.fields.title;
    div.classList.add("book-spine");
    div.addEventListener("click", () => {
      showBook(book, div);
    });
    shelf.appendChild(div);
  });
}

function showBook(book, div) {
  console.log("showBook()", book);

  const bookDetail = document.getElementById("book-detail");

  bookDetail.getElementsByClassName("title")[0].innerText = book.fields.title; //
  bookDetail.getElementsByClassName("description")[0].innerText =
    book.fields.description;
  bookDetail.getElementsByClassName("more")[0].href = book.fields.more;
  bookDetail.getElementsByClassName("cover-image")[0].src =
    book.fields.cover_image[0].url;


  const shelf = document.getElementById("shelf");
  const bookSpines = shelf.getElementsByClassName("active");
  for (const bookSpine of bookSpines) {
    bookSpine.classList.remove("active");
  }

  div.classList.add("active");

  bookDetail.classList.remove("hidden");
}