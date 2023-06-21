import React from 'react';
import '../../css/components/Header.css';
import logoNba from '../../assets/logos/SVG-nba.svg';
// import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <div className="Header">
      <Navbar>
        <Container id="containHeader">
          <Navbar.Brand href="/">
            <img
              alt="logoHeader"
              src={logoNba}
              width="100"
              height="100"
              className="d-inline-block align-top"
            />{' '}
            <p>Land</p>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

/* 
<Navbar>
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="logoHeader"
              src={logoNba}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Land
          </Navbar.Brand>
        </Container>
      </Navbar>
*/
