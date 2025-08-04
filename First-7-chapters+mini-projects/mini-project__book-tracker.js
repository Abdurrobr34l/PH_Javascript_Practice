// *🧠 Mini Project: Library Book Tracker
// ?📚 Goal:
// You will build an app to manage a small library system. It should:
// Display all available books (with title, author, and availability).
// Search for a book by title (case-insensitive).
// Count how many books are currently available.
// Show a list of books by a specific author.

let library = [
  { title: "Atomic Habits", author: "James Clear", available: true },
  { title: "The Alchemist", author: "Paulo Coelho", available: false },
  { title: "Deep Work", author: "Cal Newport", available: true },
  { title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", available: false },
  { title: "Digital Minimalism", author: "Cal Newport", available: true }
];
// ?✅ Tasks:
// ?Print all available books only.

// ?Show total number of available books.

// ?Ask for a book title (let searchTitle = "deep work") and show if the book exists and its availability.

// ?Ask for an author's name (let searchAuthor = "cal newport") and list all books by that author.

// ?Task 1 & 2
let totalBookAvailable = 0;

// ?Task 3
let searchTitle = "deep work";
let searchTitleLowerCase = searchTitle.toLocaleLowerCase();
let found = false;

// ?Task 4
let searchAuthor = "cal newport";
let searchAuthorLowerCase = searchAuthor.toLowerCase();
let foundAuthor = false;

for (let availableBooks of library) {
  // ?Task 1 & 2
  if (availableBooks.available === true) {
    console.log(`${availableBooks.title} | ${availableBooks.author} | Available`);
    totalBookAvailable++;
  }

  // ?Task 3
  let booksTitle = availableBooks.title.toLocaleLowerCase();
  if (searchTitleLowerCase === booksTitle) {
    console.log(`Book exists`)

    if (availableBooks.available === true) {
      console.log(`Book is Available`)
    } else {
      console.log(`Book is not Available`)
    }
    found = true;
    break;
  }
  // console.log(booksTitle);
  // console.log(searchTitleLowerCase);

}
// ?Task 1 & 2
console.log(`${totalBookAvailable} books are available`)
// ?Task 3
if (!found) {
  console.log(`Book doesn't exist`)
}

// ?Task 4
for (let availableBooks of library) {
  let booksauthor = availableBooks.author.toLocaleLowerCase();
  // console.log(booksauthor);
  if (searchAuthorLowerCase === booksauthor) {
    console.log(`${availableBooks.title} | ${availableBooks.author}`);
    foundAuthor = true;
  }
}
// ?Task 4
if (!foundAuthor) {
  console.log(`No such books by the author`)
}
