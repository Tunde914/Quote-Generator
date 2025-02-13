const quotes = [
    { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
    { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { text: "Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
    { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
    { text: "Do what you can with all you have, wherever you are.", author: "Theodore Roosevelt" },
    { text: "Never let the mirror judges you, you judge what you see in the mirror 🤍🦅.", author: "Ishau Babatunde" },
    { text: "Never forget why you started 💪", author: "Ishau Babatunde" } // New quote added
];

function displayQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    const quoteElement = document.querySelector('.quote');
    const authorElement = document.querySelector('.author');

    quoteElement.style.opacity = '0';
    authorElement.style.opacity = '0';

    setTimeout(() => {
        quoteElement.textContent = `"${quote.text}"`;
        authorElement.textContent = `- ${quote.author}`;
        quoteElement.style.opacity = '1';
        authorElement.style.opacity = '1';
    }, 1000);
}

// Display the "Ishau Babatunde" first quote initially
const initialQuote = quotes[quotes.length - 2]; // Get the second last quote ("Never let the mirror judge")
const secondQuote = quotes[quotes.length - 1]; // Get the last quote ("Never forget why you started")

const quoteElement = document.querySelector('.quote');
const authorElement = document.querySelector('.author');

// Show the first quote
quoteElement.textContent = `"${initialQuote.text}"`;
authorElement.textContent = `- ${initialQuote.author}`;

// Display the second quote after a delay (5 seconds)
setTimeout(() => {
    quoteElement.textContent = `"${secondQuote.text}"`;
    authorElement.textContent = `- ${secondQuote.author}`;
}, 5000);

// Start the interval after displaying the second quote
setInterval(displayQuote, 5000);