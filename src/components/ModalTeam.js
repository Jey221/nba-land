import '../css/components/ModalTeam.css';
import * as AiIcons from 'react-icons/ai';
import LOGOS from '../data/LogosTeams';
import ARENA from '../data/Arena';
import { Link } from 'react-router-dom';

export default function ModalTeam({ setIsOpenModal, selectedTeam }) {
  // liaison entre les logos et les équipes
  const logo = LOGOS[selectedTeam.abbreviation];
  // liaison entre les images d'arène et les équipes
  const arena = ARENA[selectedTeam.abbreviation];
  // mise en forme de l'image de l'arène
  const arenaStyle = {
    backgroundImage: `url(${arena})`,
  };
  console.log(selectedTeam);
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
          <Link to={`/teams/details/${selectedTeam.name}`}>
            <div className="logoZone">
              <img
                src={logo}
                alt={selectedTeam.abbreviation}
                className="logoTeam"
                id={selectedTeam.abbreviation}
              />
              <h2>{selectedTeam.name}</h2>
            </div>
          </Link>
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
