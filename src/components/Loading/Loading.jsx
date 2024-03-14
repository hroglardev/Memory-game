import './Loading.scss';

const Loading = () => {
  return (
    <div className='loader'>
      <p className='loading-text'>
        Load<span>ing</span> ...
      </p>
      <img src='https://i.gifer.com/ZJFD.gif' alt='Goku running' />
    </div>
  );
};
export default Loading;
