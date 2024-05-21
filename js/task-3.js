const inputElement = document.querySelector("#name-input");
const spanElement = document.querySelector("#name-output");
inputElement.addEventListener("input", OnInputChange);

function OnInputChange() {
  const userName = inputElement.value.trim();
  if (userName) {
    return (spanElement.textContent = `${userName}`);
  } else {
    return (spanElement.textContent = "Anonymous");
  }
}
