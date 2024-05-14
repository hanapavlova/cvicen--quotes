import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { quotes, randomQuote, moveTotop } from './quotes.js';

document.querySelector("#quote").textContent = randomQuote()

const renderQuotes = () => {
    quotes.forEach((item) => {
    const quotesList = document.querySelector(".container")
    const quoteElement = document.createElement("p");
    quoteElement.textContent = item;
    quoteElement.id = `quote`;
    quotesList.appendChild(quoteElement);
});
}
renderQuotes()

const quoteElement = document.querySelectorAll("#quote");
    quoteElement.forEach((item, index) => {
    item.addEventListener("click", () => {
        moveTotop(index);
        renderQuotes();
    });
});


