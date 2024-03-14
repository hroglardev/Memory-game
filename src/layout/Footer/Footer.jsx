import Github from '../../assets/icons/github.svg';
import LinkedIn from '../../assets/icons/linkedin.svg';
import './Footer.scss';
const Footer = () => {
  const year = new Date().getFullYear();
  const developerName = 'Lucas Cubile';
  const appName = 'DBZ Memory Game';
  return (
    <footer>
      <p>
        &copy; {year} {developerName} | <span>{appName}</span>
      </p>
      <div>
        <a href='https://github.com/hroglardev/' target='_blank'>
          <img src={Github} alt='github' />
        </a>
        <a
          href='https://www.linkedin.com/in/lucas-martin-cubile/'
          target='_blank'>
          <img src={LinkedIn} alt='linkedIn' />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
