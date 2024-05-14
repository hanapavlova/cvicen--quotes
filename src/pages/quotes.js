export const quotes = [
    "Představte si to ticho, kdyby lidé říkali jen to, co vědí.",
    "Svět patří těm, co se neposerou.",
    "Ne všichni, kdo bloudí, jsou ztraceni.",
    "Kde blb, tam nebezpečno.",
    "Člověk miluje, protože miluje. Není k tomu žádný důvod.",
    "Stáváš se navždy zodpovědným za to, cos k sobě připoutal."
]

export const randomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length)

    return quotes [randomIndex]
}

export const moveTotop = (index) => {
    let item = quotes.splice(index, 1)[0];
    quotes.unshift(item);
    return quotes
}