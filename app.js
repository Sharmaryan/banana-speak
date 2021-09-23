const btn = document.querySelector("#translate-btn");
const textTranslating = document.querySelector("#text-translating");
const showOutput = document.querySelector("#show-output");

const url = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
  return `${url}?text=${text}`;
}

function errorHandling() {
  alert("something is wrong with the server, please try after some time");
}

btn.addEventListener("click", () => {
  let translatingTextValue = textTranslating.value;
  fetch(getTranslationURL(translatingTextValue))
    .then((response) => response.json())
    .then((json) => {
      const translatedText = json.contents.translated;
      showOutput.innerText = translatedText;
    })
    .catch(errorHandling);
});
