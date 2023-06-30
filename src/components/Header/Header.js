import '../../css/components/Header.css';
import logoNba from '../../assets/logos/SVG-nba.svg';
import { Link } from 'react-router-dom';
import NavbarHeader from './Navbar';

export default function Header() {
  return (
    <header className="Header">
      <div className="logoHeader">
        <Link to={'/'}>
          <img
            alt="logoHeader"
            src={logoNba}
            width="100"
            height="100"
            className="d-inline-block align-top"
          />{' '}
          <p>Land</p>
        </Link>
      </div>
      <NavbarHeader />
    </header>
  );
}

/* 
          

*/
