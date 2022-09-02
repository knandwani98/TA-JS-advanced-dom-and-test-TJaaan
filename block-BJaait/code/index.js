let form = document.querySelector("form");
let root = document.querySelector(".root");
let plus = document.querySelector("span.fa-plus");

let items = JSON.parse(localStorage.getItem("allItems")) || [];

function createUI(data = items, rooot = root) {
  root.innerHTML = "";
  let fragment = new DocumentFragment();
  data.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item.value;
    li.setAttribute("draggable", "true");
    let span = document.createElement("span");
    li.append(span);
    fragment.appendChild(li);
  });
  rooot.append(fragment);
}

plus.addEventListener("click", (e) => {
  let value = e.target.previousSibling.previousSibling.value;
  items.push({ value });
  localStorage.setItem("allItems", JSON.stringify(items));
  createUI();
  e.target.previousSibling.previousSibling.value = "";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

createUI();
