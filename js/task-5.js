function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButton = document.querySelector(".change-color");
const changeColorspan = document.querySelector(".color");
changeColorButton.addEventListener("click", (e) => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  changeColorspan.textContent = randomColor;
});
