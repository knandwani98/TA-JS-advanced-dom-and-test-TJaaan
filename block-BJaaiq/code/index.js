// window.addEventListener("DOMContentLoaded", () => {
//   alert(`The content of the DOM is loaded`);
// });

let root = document.querySelector(".root");

class Quote {
  constructor(quoteText, quoteAuthor) {
    this.quoteText = quoteText;
    this.quoteAuthor = quoteAuthor;
  }
}

class QuoteList {
  constructor(list = [], count = 0) {
    this.list = list;
    this.count = count;
  }

  addQuote(quoteText, quoteAuthor) {
    let quote = new Quote(quoteText, quoteAuthor);
    this.list.push(quote);
  }

  addCount(count = 3) {
    this.count = this.count + count;
  }

  createUI() {
    this.list.forEach((q) => {
      let li = document.createElement("li");
      li.innerText = q.quoteText;
      let address = document.createElement("address");
      address.innerText = q.quoteAuthor;
      li.append(address);
      root.append(li);
    });
  }
}
let myList = new QuoteList();

quotes.forEach((q) => {
  if (myList.count < 3) {
    myList.count++;
    myList.addQuote(q.quoteText, q.quoteAuthor);
  }
});

myList.createUI();

let positionTop = document.documentElement.getBoundingClientRect().top;
let positionBottom = document.documentElement.getBoundingClientRect().bottom;
let totalVH = document.documentElement.clientHeight;

// function populate() {
//   while (true) {
//     if (positionBottom > totalVH + 100) break;
//     count = count + 3;
//   }
// }

// window.addEventListener("scroll", populate);

// // populate();
