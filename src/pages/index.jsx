import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { quotes, randomQuote, moveTotop } from './quotes.js';

document.querySelector("#quote").textContent = randomQuote()

const renderQuotes = () => {
    const quotesList = document.querySelector(".container");
    quotesList.innerHTML = "";
    quotes.forEach((item) => {
    const quoteElement = document.createElement("p");
    quoteElement.textContent = item;
    quoteElement.className = "quote";
    quotesList.appendChild(quoteElement);
});

const quoteElement = document.querySelectorAll(".quote");
    quoteElement.forEach((item, index) => {
    item.addEventListener("click", () => {
        moveTotop(index);
        renderQuotes();
    });
});

}
renderQuotes()




