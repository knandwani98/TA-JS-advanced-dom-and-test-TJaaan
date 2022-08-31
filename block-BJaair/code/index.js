let root = document.querySelector(".root");
let form = document.querySelector("form");
let inputTitle = document.querySelector(".input-title");
let inputCategory = document.querySelector(".input-category");

function addNotice() {
  let div = document.createElement("div");
  div.classList.add("card");
  let a = document.createElement("a");
  a.href = "#";
  a.innerText = inputCategory.value;
  let h2 = document.createElement("h2");
  h2.innerText = inputTitle.value;
  div.append(a, h2);
  root.append(div);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addNotice();
  inputTitle.value = "";
  inputCategory.value = "";
});

let area = "";

let editArea = function () {};
