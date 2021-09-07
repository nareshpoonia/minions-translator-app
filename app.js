var button = document.querySelector("#button");
console.log(button);
var textArea = document.querySelector("#text-area");

button.addEventListener("click", function callback() {
  console.log("clicked");
  console.log(textArea.value);
});
