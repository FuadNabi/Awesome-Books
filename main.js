const bookForm = document.querySelector('.book-form');
const collection = document.querySelector('.collection');

function addNewBookData() {
  const bookTitle = bookForm.title.value;
  const bookAuthor = bookForm.author.value;

  const book = {
    title: bookTitle,
    author: bookAuthor,
  };

  return book;
}

function saveBooks(book) {
  let books = [];

  if (localStorage.getItem('Books')) {
    books = JSON.parse(localStorage.getItem('Books'));
  }

  books.push(book);
  localStorage.setItem('Books', JSON.stringify(books));
}

function addBook(element) {
  element.preventDefault();
  saveBooks(addNewBookData());
  bookForm.submit();
}

function showBooks() {
  if (localStorage.getItem('Books')) {
    const books = JSON.parse(localStorage.getItem('Books'));
    books.forEach((book) => {
      const booksHtml = `
        <tr class="book-info">
          <td class="title">${book.title}</td>
          <td class="author">${book.author}</td>
          <td><button class="remove-btn">Remove</button></td>
        </tr>
      `;
      collection.innerHTML += booksHtml;
    });
  }
}

showBooks();
bookForm.addEventListener('submit', addBook);