import  { useState, useEffect } from 'react';

const quotes = [
  { text: "You can do anything as you wish", author: "Inspirational Quote" },
  { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { text: "Do not wait to strike till the iron is hot; but make it hot by striking.", author: "William Butler Yeats" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
  { text: "The best revenge is massive success.", author: "Frank Sinatra" },
  { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" }
];

const Quote = () => {
  const [quote, setQuote] = useState({ text: "", author: "" });

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full h-full p-8 text-center text-white">
      <div className="text-3xl font-serif font-bold mb-4">" {quote.text} "</div>
      <div className="text-lg font-medium text-gray-300">- {quote.author}</div>
    </div>
  );
};

export default Quote;
