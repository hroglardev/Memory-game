import './Header.scss';
import Logo from '../../assets/icons/Dragon Ball Z logo.svg';
import SmallLogo from '../../assets/icons/Dragon Ball.svg';
import { useState, useEffect } from 'react';

const Header = ({ score, best }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.matchMedia('(max-width: 522px)').matches);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <header>
      <h1>
        <img
          src={isSmallScreen ? SmallLogo : Logo}
          alt='Dragon Ball Z'
          className='page-logo'
          width={isSmallScreen ? '50px' : '200px'}
          height={isSmallScreen ? '50px' : '55px'}
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
