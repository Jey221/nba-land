import React from 'react';
import '../../css/components/Header.css';
import logoNba from '../../assets/logos/SVG-nba.svg';

export default function Header() {
  return (
    <div className="Header">
      <img id="logoNbaHead" src={logoNba} alt="logoTest" />
    </div>
  );
}
