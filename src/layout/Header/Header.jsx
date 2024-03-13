import './Header.scss';
import Logo from '../../assets/icons/Dragon Ball Z logo.svg';

const Header = () => {
  return (
    <header>
      <img
        src={Logo}
        alt='Dragon Ball Z'
        className='page-logo'
        width={'200 px'}
      />
      <h1 className='page-title'>
        Memory<span>Game</span>
      </h1>
    </header>
  );
};
export default Header;
