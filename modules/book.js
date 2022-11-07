export default class Books {
  constructor(title, author) {
    this.id = Date.now().toString();
    this.title = title;
    this.author = author;
  }

  getBookDetails() {
    return { title: this.title, author: this.author };
  }
}