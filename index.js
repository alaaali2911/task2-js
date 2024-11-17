const arrayOfQuotes = [
  {
    author: "Jim Rohn",
    quote: "Beware of what you become in pursuit of what you want.",
  },
  {
    author: "Epictetus",
    quote:
      "It's not what happens to you, but how you react to it that matters.",
  },
  {
    author: "Frank Sinatra",
    quote: "The best revenge is massive success that matters.",
  },
  {
    author: "Wayne Gretzy",
    quote: "You miss 100% of the shots you don't take.",
  },
  {
    author: "Nelson Mandela",
    quote:
      "Resentment is like drinking poison and waiting for your enemies to die.",
  },
  {
    author: "Elbert Hubbard",
    quote: "Do not take life too seriously. You will not get out alive.",
  },
];
let currentNumber = null;
function generateQuote() {
  let newNumber;
  do {
    newNumber = Math.floor(Math.random() * arrayOfQuotes.length);
  } while (newNumber === currentNumber);
  currentNumber = newNumber;
  console.log(currentNumber);
  return newNumber;
}

const displayQuote = () => {
  const randomIndex = generateQuote();
  document.querySelector(
    "#quoteOutput"
  ).textContent = `\'${arrayOfQuotes[randomIndex].quote}\'`;
  document.querySelector(
    "#authorOutput"
  ).textContent = `--${arrayOfQuotes[randomIndex].author}`;
};
