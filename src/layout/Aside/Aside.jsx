import './Aside.scss';
import Goku from '../../assets/goku.webp';

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
      <img src={Goku} alt='goku' width={'150px'} />
    </aside>
  );
};
export default Aside;
