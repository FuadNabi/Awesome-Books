import * as Base from '../modules/base.js';
import { DateTime } from '../modules/luxon.js';

const DateNow = document.querySelector('.date');
const bookForm = document.forms[0];
const collections = document.querySelector('.collections');
const item = document.querySelectorAll('.nav-link');

const time = () => {
  const now = DateTime.now();
  DateNow.innerHTML = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
};

setInterval(time, 1000);

Base.addBook(bookForm, collections);
Base.displayBook(collections);
Base.singlePageApp(item);