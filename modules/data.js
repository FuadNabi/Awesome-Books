export default class Data {
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