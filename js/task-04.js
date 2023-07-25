
const counterValue = document.getElementById("value");

const decrementButton = document.querySelector('button[data-action="decrement"]');

const incrementButton = document.querySelector('button[data-action="increment"]');

let count = 0;

decrementButton.addEventListener("click", () => {
    count -= 1;
  counterValue.textContent = count;
});
incrementButton.addEventListener("click", () => {
  count += 1;
  counterValue.textContent = count;
});
