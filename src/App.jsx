import { useState } from 'react';
import './App.scss';
import Header from './layout/Header/Header';
import Main from './layout/Main/Main';

function App() {
  const [clickedCards, setClickedCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [best, setBest] = useState(0);

  const handleClick = (id) => {
    if (!clickedCards.includes(id)) {
      setClickedCards((prevData) => [...prevData, id]);
      setCurrentScore(currentScore + 1);
    } else {
      clickedCards.length > best && setBest(clickedCards.length);
      setClickedCards([]);
      setCurrentScore(0);
    }
  };

  return (
    <>
      <Header score={currentScore} best={best} />
      <Main handleClick={handleClick} />
    </>
  );
}

export default App;

