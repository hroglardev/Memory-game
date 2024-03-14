import './FailFetch.scss';

const FailFetch = ({ message, image, status }) => {
  return (
    <div className='error-container'>
      <p className='error-message'>
        {`Error: ${status} `}
        <span>{message}</span>
      </p>
      <div className='image-container'>
        <img src={image} alt='Veku' width='{400px}' />
      </div>
    </div>
  );
};
export default FailFetch;
