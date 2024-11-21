import quoteData from './quotes.js';
import QuoteBox from './components/QuoteBox';
import { useState } from 'react';
import colorData from './colors.js';

const quotes = quoteData;
const colors = colorData;

function App() {
  function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }

  const [shuffledQuotes, setSuffledQuotes] = useState(() =>
    shuffleArray(quotes)
  );
  const [shuffledColors, setSuffledColors] = useState(() =>
    shuffleArray(colors)
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  function changeQuoteAndColor() {
    const nextIndex = currentIndex + 1;

    if (nextIndex >= shuffledQuotes.length) {
      setSuffledQuotes(shuffleArray(quotes));
      setSuffledColors(shuffleArray(colors));
      setCurrentIndex(0);
    } else {
      setCurrentIndex(nextIndex);
    }
  }

  return (
    <div
      className={`text-center p-10 bg-${shuffledColors[currentIndex]} h-screen content-center justify-items-center`}
    >
      <QuoteBox
        quote={shuffledQuotes[currentIndex]}
        onClick={changeQuoteAndColor}
        color={shuffledColors[currentIndex]}
      />
    </div>
  );
}

export default App;
