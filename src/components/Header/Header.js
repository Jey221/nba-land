import React from 'react';
import '../../css/components/Header.css';
import logoNba from '../../assets/logos/SVG-nba.svg';
// import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavBarHeader from './NavBarHeader';

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
          <NavBarHeader />
        </Container>
      </Navbar>
    </div>
  );
}
