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
  //only need a forward button
  //

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

        <button onClick={flipCard}>
          card side is {currentCard.side1}
        </button>

        <br></br>
        
        <button onClick={() => setIndex(index - 1)}>Prev</button>
        <button onClick={() => setIndex(index + 1)}>Next</button>

      </div>
    </>
  )
}

export default App
