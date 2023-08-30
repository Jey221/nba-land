import { useState } from 'react';
import '../css/components/Dropdown.css';
import * as BsIcons from 'react-icons/bs';
import ModalDropdown from './ModalDropdown';
import THE1stTEAMALLNBA from '../assets/images/trophies/allNBA1.png';
import THE2ndTEAMALLNBA from '../assets/images/trophies/allNBA2.png';
import THE3rdTEAMALLNBA from '../assets/images/trophies/allNBA3.png';
import THE1stTEAMROOKIE from '../assets/images/trophies/allROOK1.png';
import THE2ndTEAMROOKIE from '../assets/images/trophies/allROOK2.png';
import THE1stTEAMDEFENSIVE from '../assets/images/trophies/allDEF1.png';
import THE2ndTEAMDEFENSIVE from '../assets/images/trophies/allDEF2.png';

export default function Dropdown({ allTeam, team1, team2, team3 }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [target, setTarget] = useState(null);

  const teamImageUrls = {
    'THE 1st TEAM ALL NBA': THE1stTEAMALLNBA,
    'THE 2nd TEAM ALL NBA': THE2ndTEAMALLNBA,
    'THE 3rd TEAM ALL NBA': THE3rdTEAMALLNBA,
    'THE 1st TEAM ROOKIE': THE1stTEAMROOKIE,
    'THE 2nd TEAM ROOKIE': THE2ndTEAMROOKIE,
    'THE 1st TEAM DEFENSIVE': THE1stTEAMDEFENSIVE,
    'THE 2nd TEAM DEFENSIVE': THE2ndTEAMDEFENSIVE,
  };

  function toggleDropDown() {
    setIsOpen(!isOpen);
  }
  function modalAllTeam(e) {
    setIsOpen(false);
    setIsOpenModal(true);
    setTarget(e.target.textContent);
  }
  const blocLinksStyle = {
    transition: 'height 0.2s ease-in-out',
    height: isOpen ? 'auto' : 0,
    overflow: 'hidden',
  };

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
      {isOpenModal && (
        <ModalDropdown
          setIsOpenModal={setIsOpenModal}
          target={teamImageUrls[target]}
        />
      )}
    </div>
  );
}
