import './ResetModal.scss';

const ResetModal = ({ setClickedCards, setCurrentScore, setIsGameOver }) => {
  return (
    <div className='modal'>
      <p>Good work. Goku has enough energy to throw the spirit bomb</p>
      <button
        type='button'
        onClick={() => {
          setClickedCards([]);
          setCurrentScore(0);
          setIsGameOver(false);
        }}>
        Play again
      </button>
    </div>
  );
};
export default ResetModal;
