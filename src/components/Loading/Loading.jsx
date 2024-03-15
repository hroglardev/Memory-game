import './Loading.scss';

const Loading = () => {
  return (
    <div className='loader'>
      <img
        src='https://res.cloudinary.com/djwg0bdyh/image/upload/v1710517552/runninggoku-ezgif.com-optiwebp_divnfv.webp'
        alt='Goku running'
      />
      <p className='loading-text'>
        Load<span>ing</span> ...
      </p>
    </div>
  );
};
export default Loading;
