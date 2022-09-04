let root = document.querySelector(".root");
let form = document.querySelector("form");

let cards = JSON.parse(localStorage.getItem("allNotice")) || [];

function handleDelete(event) {
  cards.splice(event.target.id, 1);
  createUI();
}

function editText(event, id, label) {
  let elm = event.target;
  let txt = event.target.innerText;
  let parent = event.target.parentElement;
  let input = document.createElement("input");
  parent.replaceChild(input, elm);
  input.focus();
  input.value = txt;
  input.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
      let updatedValue = event.target.value;
      cards[id][label] = updatedValue;
      createUI();
      localStorage.setItem("allNotice", JSON.stringify(cards));
    }
  });
}

function createUI(data = cards, rooot = root) {
  root.innerHTML = "";
  let fragment = new DocumentFragment();
  data.forEach((card, i) => {
    let li = document.createElement("li");
    li.classList.add("card");
    let a = document.createElement("a");
    a.href = "#";
    a.innerText = card.category;
    let h2 = document.createElement("h2");
    h2.innerText = card.title;
    let div = document.createElement("div");
    let span = document.createElement("span");
    span.id = i;
    span.innerText = "x";

    a.addEventListener("dblclick", (event) => {
      editText(event, i, "category");
    });

    h2.addEventListener("dblclick", (event) => {
      editText(event, i, "title");
    });

    span.addEventListener("click", (event) => {
      handleDelete(event);
      localStorage.setItem("allNotice", JSON.stringify(cards));
    });

    div.append(span);
    li.append(a, h2, div);
    fragment.appendChild(li);
  });
  root.append(fragment);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let title = event.target.elements.title.value;
  let category = event.target.elements.category.value;
  cards.push({ title, category });
  localStorage.setItem("allNotice", JSON.stringify(cards));
  createUI();
  event.target.elements.title.value = "";
  event.target.elements.category.value = "";
});

createUI();
