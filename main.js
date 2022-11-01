const bookForm = document.forms[0];
const collections = document.querySelector('.collections');

class Books {
  constructor(title, author) {
    this.id = Date.now().toString();
    this.title = title;
    this.author = author;
  }

  getBookDetails() {
    return { title: this.title, author: this.author };
  }
}
class Data {
  static #books = [];

  static #checkData() {
    return localStorage.getItem('Books');
  }

  static getData() {
    if (Data.#checkData()) {
      Data.#books = JSON.parse(localStorage.getItem('Books'));
    }
    return Data.#books;
  }

  static saveData(book) {
    if (Data.#checkData()) {
      Data.#books = JSON.parse(localStorage.getItem('Books'));
    }

    Data.#books.push(book);
    localStorage.setItem('Books', JSON.stringify(Data.#books));
  }

  static removeData(bookId) {
    if (Data.#checkData()) {
      let books = Data.#books;
      books = books.filter((book) => book.id !== bookId);
      localStorage.setItem('Books', JSON.stringify(books));
      Data.#books = books;
    }
  }
}

class BookMain {
  static #booksHtml(book) {
    const booksHtml = `
        <td class="author">${book.author}</td>
        <td class="title">${book.title}</td>
        <td><button id="${book.id}" class="remove">Remove</button></td>
      `;
    return booksHtml;
  }

  static showBook(container, book) {
    const row = document.createElement('tr');
    row.classList.add('book-info');
    row.innerHTML = BookMain.#booksHtml(book);

    container.appendChild(row);
    const removeBtn = document.getElementById(book.id);

    removeBtn.addEventListener('click', () => {
      BookMain.removeBook(removeBtn);
      Data.removeData(removeBtn.getAttribute('id'));
    });
  }

  static removeBook(btn) {
    btn.parentElement.parentElement.remove();
  }

  static showBooks(container) {
    const books = Data.getData();
    books.forEach((book) => {
      BookMain.showBook(container, book);
    });
  }
}

class CheckUp {
  static falseBook(title, author) {
    const inputs = [title, author].filter((input) => input.value === '');
    inputs.forEach((input) => {
      input.classList.add('border-red');
    });
  }

  static trueBook(title, author) {
    const inputs = [title, author].filter((input) => input.value !== '');
    inputs.forEach((input) => {
      input.classList.remove('border-red');
    });
  }
}

bookForm.add.addEventListener('click', (element) => {
  element.preventDefault();

  const { title } = bookForm;
  const { author } = bookForm;

  if (title.value === '' || author.value === '') {
    CheckUp.falseBook(title, author);
    CheckUp.trueBook(title, author);
  } else {
    CheckUp.trueBook(title, author);
    const book = new Books(title.value, author.value);
    Data.saveData(book);
    BookMain.showBook(collections, book);

    bookForm.reset();
  }
});

document.addEventListener(
  'DOMContentLoaded',
  () => {
    BookMain.showBooks(collections);
  },
);
