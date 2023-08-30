import { useState } from 'react';
import '../css/components/Dropdown.css';
import * as BsIcons from 'react-icons/bs';
export default function Dropdown({ allTeam, team1, team2, team3 }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropDown() {
    setIsOpen(!isOpen);
  }
  function modalAllTeam() {
    console.log('hello');
    setIsOpen(false);
  }
  const blocLinksStyle = {
    transition: 'height 0.2s ease-in-out',
    height: isOpen ? 'auto' : 0,
    overflow: 'hidden',
  };
  console.log(team3 !== undefined);
  return (
    <div className="dropdown">
      <button className="btn-top" onClick={toggleDropDown}>
        <span>{allTeam}</span>
        {isOpen === false ? (
          <BsIcons.BsArrowDownCircleFill />
        ) : (
          <BsIcons.BsArrowUpCircleFill />
        )}
      </button>
      <div
        className={`bloc-links ${isOpen ? 'open' : ''}`}
        style={blocLinksStyle}
      >
        <ul>
          <li className="allTeam" onClick={modalAllTeam}>
            {team1}
          </li>
          <li className="allTeam" onClick={modalAllTeam}>
            {team2}
          </li>
          {team3 !== undefined ? (
            <li className="allTeam" onClick={modalAllTeam}>
              {team3}
            </li>
          ) : (
            ''
          )}
        </ul>
      </div>
    </div>
  );
}
