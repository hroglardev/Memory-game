import { useState } from 'react';
import './App.scss';
import Header from './layout/Header/Header';
import Main from './layout/Main/Main';
import Aside from './layout/Aside/Aside';
import ResetModal from './components/ResetModal/ResetModal';

function App() {
  const [clickedCards, setClickedCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [best, setBest] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const handleClick = (id) => {
    if (!clickedCards.includes(id)) {
      setClickedCards((prevData) => [...prevData, id]);
      setCurrentScore(currentScore + 1);
      if (clickedCards.length === 1) {
        setIsGameOver(true);
      }
    } else {
      clickedCards.length > best && setBest(clickedCards.length);
      setClickedCards([]);
      setCurrentScore(0);
    }
  };

  return (
    <>
      <Header score={currentScore} best={best} />
      {!isGameOver && <Main handleClick={handleClick} />}
      {isGameOver && (
        <ResetModal
          setClickedCards={setClickedCards}
          setCurrentScore={setCurrentScore}
          setIsGameOver={setIsGameOver}
        />
      )}
      <Aside size={clickedCards.length} />
    </>
  );
}

export default App;

