// Отримуємо посилання на елементи лічильника
const counterValue = document.getElementById("value");
// кнопку зменшення(`decrementButton`)
const decrementButton = document.querySelector('button[data-action="decrement"]');
// кнопку збільшення(`incrementButton`)
const incrementButton = document.querySelector('button[data-action="increment"]');

// Створюємо змінну count з початковим значенням 0, яка відображає поточне значення лічильника
let count = 0;

// Додаємо слухачі подій click до кнопок
decrementButton.addEventListener("click", () => {
    count -= 1;
  counterValue.textContent = count;
});
incrementButton.addEventListener("click", () => {
  count += 1;
  counterValue.textContent = count;
});
