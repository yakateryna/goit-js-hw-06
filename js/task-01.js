const categoriesList = document.getElementById('categories');
const items = Array.from(categoriesList.children);

console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const titleElement = item.firstElementChild;
  const title = titleElement.textContent;
  const itemList = Array.from(item.getElementsByTagName('li'));

  console.log(`Category: ${title}\nNumber of items: ${itemList.length}`);
});