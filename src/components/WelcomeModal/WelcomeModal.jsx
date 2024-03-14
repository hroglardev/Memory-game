import './WelcomeModal.scss';

const WelcomeModal = ({ setIsStarted }) => {
  return (
    <div className='welcome-modal'>
      <p>Help goku get enough energy for his spirit bomb</p>
      <p>
        Click on each character only once. If you click a previously clicked
        card, Goku will lose his energy.
      </p>
      <button type='button' onClick={() => setIsStarted(true)}>
        Start
      </button>
    </div>
  );
};
export default WelcomeModal;
