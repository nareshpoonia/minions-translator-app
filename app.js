var button = document.querySelector("#button");
var inputTextArea = document.querySelector("#input-text-area");
var outputText = document.querySelector("#output-text");

//api Url
var serverURL = "https://api.funtranslations.com/translate/minion.json";

// function to take input and change the url
function getTranslatedText(text) {
  return serverURL + "?" + "text=" + text;
}

// function to handle error
function errorHandler(error) {
  console.log("There is an error, please try again after some time");
  alert("There is an error, please try again after some time");
}

//Event Handler for click event
button.addEventListener("click", function callback() {
  // .value saves the value of input
  var inputText = inputTextArea.value;

  fetch(getTranslatedText(inputText))
    .then((response) => response.json())
    .then((json) => {
      // consoling json helps to decide the code
      var translatedText = json.contents.translated;
      outputText.innerText = translatedText;
    })
    .catch(errorHandler);
});
