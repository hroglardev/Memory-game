import './Header.scss';
import Logo from '../../assets/icons/Dragon Ball Z logo.svg';

const Header = ({ score, best }) => {
  return (
    <header>
      <h1>
        <img
          src={Logo}
          alt='Dragon Ball Z'
          className='page-logo'
          width={'200 px'}
          aria-label='page-title'
        />
      </h1>
      <div className='scores'>
        <p>Best: {best}</p>
        <p>Current: {score}</p>
      </div>
    </header>
  );
};
export default Header;
