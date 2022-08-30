// window.addEventListener("DOMContentLoaded", () => {
//   alert(`The content of the DOM is loaded`);
// });

let root = document.querySelector(".root");

let count = 3,
  ind = 0;

function createUI() {
  for (i = 0; i < count; i++) {
    let li = document.createElement("li");
    let blockQuote = document.createElement("blockquote");
    let cite = document.createElement("cite");
    blockQuote.innerText = quotes[ind].quoteText;
    cite.innerText = quotes[ind].quoteAuthor;
    li.append(blockQuote, cite);
    root.append(li);
    ind++;
  }
}

createUI();

document.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  let scrollHeight = document.documentElement.scrollHeight;
  let clienHeight = document.documentElement.clientHeight;
  if (scrollTop + clienHeight >= scrollHeight && ind < quotes.length) {
    createUI();
  }
});
