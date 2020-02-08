document.addEventListener("DOMContentLoaded", function () {

  let displayText= document.getElementById("inputDisplay");
  let inputBox = document.getElementById("userInput");
  let plusButton = document.getElementById("plus");
  let minusButton = document.getElementById("minus");

plusButton.addEventListener("click", plusClick);
minusButton.addEventListener("click", minusClick);

function plusClick() {
  displayText.textContent = Number(displayText.textContent) + Number(inputBox.value);
}

function minusClick() {
  displayText.textContent = Number(displayText.textContent) - Number(inputBox.value);
}

});
