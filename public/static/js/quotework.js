const file = '/static/js/quotes.txt';

async function fetchQuotes() {
    try {
        const response = await fetch(file);
        if (!response.ok) {
            throw new Error('bad response' + response.statusText);
        }
        const data = await response.text();
        return data.split('\n').filter(quote => quote.trim() !== '');
    } catch (error) {
        console.error('Problem Fetching Quotes : ', error);
        return [];
    }
}

async function applyQuote() {
    const quotes = await fetchQuotes();
    if (!quotes.length) return;

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const titleEl = document.getElementById('mainTitle');

    if (titleEl) {
        titleEl.innerHTML = `Convert <i id="highlightedText">YouTube</i> Videos to MP3<br id="msg_tip">${randomQuote}</br>`;
    }
}
applyQuote();
