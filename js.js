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

let totalBookAvailable = 0;
let searchTitle = "Atomic Habits";

for (let availableBooks of library) {
  // ?Task 1 & 2
  // if (availableBooks.available === true) {
  //   console.log(`${availableBooks.title} | ${availableBooks.author} | Available`);
  //   totalBookAvailable++;
  // }

  // ?Task 3
  for (let titleSearch of library) {
    console.log(titleSearch.title);
    if (searchTitle === titleSearch.title.toLocaleLowerCase()) {
      console.log(`${availableBooks.title} | ${availableBooks.author} | Available`);
    }
  }
  // let searchTitleLowerCase = searchTitle.toLowerCase()
  // console.log(searchTitleLowerCase)
}
console.log(`${totalBookAvailable} books are available`)