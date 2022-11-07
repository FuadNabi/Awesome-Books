import * as Base from '../modules/base.js';

const bookForm = document.forms[0];
const collections = document.querySelector('.collections');
const item = document.querySelectorAll('.nav-link');

Base.addBook(bookForm, collections);
Base.removeBook(collections);
Base.loadBooks(collections);
Base.spa(item);