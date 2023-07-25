const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// Отримуємо посилання на елемент <ul> за його id
const ul = document.getElementById("ingredients");

// Створюємо фрагмент для швидшої операції вставки
const fragment = document.createDocumentFragment();

// Проходимося по кожному елементу масиву ingredients
ingredients.forEach((ingredient) => {
  // Створюємо новий елемент <li>
  const li = document.createElement("li");
  
  // Додаємо текстовий вміст з назвою інгредієнта
  li.textContent = ingredient;
  
  // Додаємо клас "item"
  li.classList.add("item");
  
  // Додаємо елемент <li> до фрагмента
  fragment.appendChild(li);
});

// Вставляємо фрагмент зі всіма елементами <li> у <ul> за одну операцію
ul.appendChild(fragment);
