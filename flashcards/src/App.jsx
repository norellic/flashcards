import { useState } from 'react'
import './App.css'
import { cardData } from './cardData';

function App() {

  const[index, setIndex] = useState(0);
  let currentCard = cardData[index];
  let numOfCards = cardData.length;

  const [cardValue, setCardValue] = useState(currentCard.side1);
  const flipCard = () => setCardValue(cardValue === currentCard.side1 ? currentCard.side2 : currentCard.side1);

  //chooses a random index to display next
  const chooseNextCard = (max) => { 
    return Math.floor(Math.random() * max);
  }

  //combine choosing new index and refreshing disply with said index
  const newCardProcedure = () => {
    let newIndex = chooseNextCard(numOfCards);
    setIndex(newIndex);
    setCardValue(cardData[newIndex].side1);
  }

  //would love to animate a flashcard slide in/out

  return (
    <>
      <h1>Flashcards App</h1>
      <h2>Short Description</h2>
      <h3>Number of Cards: {numOfCards}</h3>
      <div className="card">
        <button onClick={flipCard}>
          card side is {cardValue}
        </button>

        <br></br>

        <button onClick={() => newCardProcedure()}>Next</button>

      </div>
    </>
  )
}

export default App
