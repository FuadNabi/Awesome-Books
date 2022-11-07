export default class CheckUp {
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