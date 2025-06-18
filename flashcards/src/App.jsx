import { useState } from 'react'
import './App.css'
import { cardData } from './cardData';

function App() {

  const[index, setIndex] = useState(0);
  let currentCard = cardData[index];
  let numOfCards = cardData.length;

  const [cardValue, setCardValue] = useState(currentCard.side1);
  const flipCard = () => setCardValue(cardValue === currentCard.side1 ? currentCard.side2 : currentCard.side1);

  //chooses a new random index to display next
  const chooseNextCard = (max, prevIndex) => {
    if (max <= 1) {
      return 0; // Only one card, so return its index
    }
    let newIndex = Math.floor(Math.random() * max);
    while (newIndex === prevIndex) {
      newIndex = Math.floor(Math.random() * max);
    }
    prevIndex = newIndex;
    return newIndex
  }
  
  //combine choosing new index and refreshing display with said index
  const newCardProcedure = () => {
    let newIndex = chooseNextCard(numOfCards, index);
    setIndex(newIndex);
    setCardValue(cardData[newIndex].side1);
  }

  //would love to animate a flashcard slide in/out
  //maybe some stuff floating in the bg...

  return (
    <>
      <h1>Flashcards App</h1>
      <h2>Short Description</h2>
      <h3>Number of Cards: {numOfCards}</h3>
      <div id="flashcard">
        <button onClick={flipCard}>
          {cardValue}
        </button>
      </div>
      <button id="nextButton" onClick={() => newCardProcedure()}>Next</button>
    </>
  )
}

export default App
