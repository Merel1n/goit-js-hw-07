const categories = document.querySelector("#categories");
const liElements = document.querySelectorAll("li.item");

console.log(`Number of categories ${liElements.length}`);

liElements.forEach((item) => {
  const liElems = item.querySelector("h2").textContent;
  console.log(`Category: ${liElems}`);
  const liElems = item.querySelectorAll("li");
  console.log(`Elements: ${liElems.length}`);
});
