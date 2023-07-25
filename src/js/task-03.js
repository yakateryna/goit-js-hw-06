const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
// Отримуємо посилання на елемент <ul> за його class
const ul = document.querySelector(".gallery");
// Створюємо рядок з HTML-розміткою для кожного об'єкта зображення
const galleryItemsHTML = images
  .map(
    (image) =>
      `<li><img src="${image.url}" alt="${image.alt}" class="gallery-image"></li>`
  )
  .join("");

// Вставляємо рядок з HTML-розміткою у список <ul> за одну операцію
ul.insertAdjacentHTML("beforeend", galleryItemsHTML);
