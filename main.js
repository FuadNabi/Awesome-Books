 class Books {
  constructor(title, author){
   this.title = title;
   this.author = author;
  }
 getBookDetails() {
  return {
    title: this.title,
    author: this.author
  }
 }

}
class Data {
  static #books = [];

  static #checkData() {
    return localStorage.getItem('Books');
  }

  static getData() {
    if(Data.#checkData()) {
      Data.#books = JSON.parse(localStorage.getItem('Books'))
    }
    return Data.#books;
  }

  static #saveData(book){
    if(Data.#checkData()) {
      Data.#books = JSON.parse(localStorage.getItem('Books'))
    }
    Data.#books.push(book);
    Data.#books = JSON.parse(localStorage.getItem('Books'))
  }

  static #removeData(index){
    if(Data.#checkData()){
      let books =Data.#checkData;
      books = books.filter((book) => books.indexOf(book) != index);
      localStorage.clear();
      Data.#books = JSON.parse(localStorage.getItem('Books'));
    }
  }

}

class BookMain {
  static #booksHtml(book) {
    const booksHtml = `
        <tr class="book-info">
          <td class="title">${book.title}</td>
          <td class="author">${book.author}</td>
          <td><button class="remove-btn">Remove</button></td>
        </tr>
      `;
    return booksHtml; 
  }

  static showBook(container, book) {
     container.innerHtml += BookMain.#booksHtml(book);
  }

  static removeBook(btn) {
     btn.parentElement.parentElement.remove();
  }

  static showBooks(container){
   Data.getData.forEach((book) => { 
     BookMain.showBook(container, book);
   });
  }
  

}

