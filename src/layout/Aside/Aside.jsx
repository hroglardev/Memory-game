import './Aside.scss';

const Aside = ({ size }) => {
  const stylesOuter = {
    width: `${size * 23.66}px`,
    height: `${size * 23.66}px`
  };

  const stylesInner = {
    width: `${(size * 23.66) / 2}px`,
    height: `${(size * 23.66) / 2}px`
  };

  const border = {
    width: `${size * 23.66}px`,
    height: `${size * 23.66}px`,
    border: `${size * 0.33}px solid #00bfff`
  };
  return (
    <aside>
      <div className='spirit-bomb outer' style={border}>
        <div className='spirit-bomb middle' style={stylesOuter}>
          <div className='spirit-bomb inner' style={stylesInner}></div>
        </div>
      </div>
      <img
        src='https://res.cloudinary.com/djwg0bdyh/image/upload/v1710517241/goku_sq5n9l.webp'
        alt='goku'
        width={'244px'}
        height={'267px'}
        loading='lazy'
      />
    </aside>
  );
};
export default Aside;
