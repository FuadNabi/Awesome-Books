import { addBook, displayBook, singlePageApp } from '../modules/base.js';

const bookForm = document.forms[0];
const collections = document.querySelector('.collections');
const item = document.querySelectorAll('.nav-link');

addBook(bookForm, collections);
displayBook(collections);
singlePageApp(item);