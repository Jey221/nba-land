import '../css/components/ModalTeam.css';
import * as AiIcons from 'react-icons/ai';
import LOGOS from '../data/LogosTeams';
import ARENA from '../data/Arena';

export default function ModalTeam({ setIsOpenModal, selectedTeam }) {
  const logo = LOGOS[selectedTeam.abbreviation];
  const arena = ARENA[selectedTeam.abbreviation];
  const arenaStyle = {
    backgroundImage: `url(${arena})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    width: '54%',
    height: '260px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'baseline',
  };

  return (
    <div className="modalBackground" onClick={setIsOpenModal.bind(this, false)}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <header className="modalHeader">
          <h1>{selectedTeam.full_name}</h1>
          <div className="closeZone" onClick={setIsOpenModal.bind(this, false)}>
            <AiIcons.AiOutlineCloseCircle />
          </div>
        </header>
        <div className="modalBody">
          <div className="logoZone">
            <img
              src={logo}
              alt={selectedTeam.abbreviation}
              className="logoTeam"
              id={selectedTeam.name}
            />
            <h2>{selectedTeam.name}</h2>
          </div>
          <div className="infos" style={arenaStyle}>
            <ul>
              <li>City : {selectedTeam.city}</li>
              <li>Conference : {selectedTeam.conference}</li>
              <li>Division : {selectedTeam.division}</li>
              <li>Abbreviation : {selectedTeam.abbreviation}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 
<AiOutlineCloseCircle/>
*/
