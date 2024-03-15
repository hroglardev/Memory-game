import { useState, lazy, Suspense } from 'react';
import './App.scss';
import Header from './layout/Header/Header';
import Main from './layout/Main/Main';
import Aside from './layout/Aside/Aside';
import Footer from './layout/Footer/Footer';
const ResetModal = lazy(() => import('./components/ResetModal/ResetModal'));
import WelcomeModal from './components/WelcomeModal/WelcomeModal';

function App() {
  const [clickedCards, setClickedCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [best, setBest] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  const handleClick = (id) => {
    if (!clickedCards.includes(id)) {
      setClickedCards((prevData) => [...prevData, id]);
      setCurrentScore(currentScore + 1);
      if (clickedCards.length === 11) {
        setIsGameOver(true);
        setBest(12);
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
      {!isStarted && <WelcomeModal setIsStarted={setIsStarted} />}
      {!isGameOver && isStarted && <Main handleClick={handleClick} />}
      {isGameOver && (
        <Suspense fallback={null}>
          <ResetModal
            setClickedCards={setClickedCards}
            setCurrentScore={setCurrentScore}
            setIsGameOver={setIsGameOver}
          />
        </Suspense>
      )}
      <Aside size={clickedCards.length} />
      <Footer />
    </>
  );
}

export default App;

