function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector("#controls input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.getElementById("boxes");
createButton.addEventListener("click", () => {
  const event = input.value;
  if (event >= 1 && event <= 100) {
    createBoxes(event);
    input.value = "";
  }
});
destroyButton.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
function createBoxes(event) {
  destroyBoxes();

  const fragment = document.createDocumentFragment();
  let size = 30;

  for (let i = 0; i < event; i++) {
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(div);
    size += 10;
  }

  boxesContainer.appendChild(fragment);
}
