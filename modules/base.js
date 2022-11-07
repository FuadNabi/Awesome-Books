import Books from './book.js';
import BookMain from './bookMain.js';
import CheckUp from './checkUp.js';
import Data from './data.js';

const addBook = (bookForm, collections) => {
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
};

const displayBook = (collections) => {
  document.addEventListener(
    'DOMContentLoaded',
    () => {
      BookMain.showBooks(collections);
    },
  );
};

const singlePageApp = (item) => {
  item.forEach((link) => {
    link.addEventListener('click', () => {
      const page = document.querySelector(
        `#${link.getAttribute('data-trigger')}`,
      );

      document.querySelector('.active').classList.remove('active');

      link.classList.add('active');

      document.querySelector('.current').classList.remove('current');

      page.classList.add('current');
    });
  });
};

export default { addBook, displayBook, singlePageApp };