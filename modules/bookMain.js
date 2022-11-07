import Data from './data.js';

export default class BookMain {
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
