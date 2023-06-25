import '../css/components/ModalTeam.css';
import * as AiIcons from 'react-icons/ai';
import LOGOS from '../data/LogosTeams';

export default function ModalTeam({ setIsOpenModal, selectedTeam }) {
  console.log('selectedTeam', selectedTeam);
  console.log('selectedTeam', selectedTeam.name);
  const logo = LOGOS[selectedTeam.abbreviation];

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
          <div className="infos">
            <ul>
              <li>{selectedTeam.city}</li>
              <li>{selectedTeam.conference}</li>
              <li>{selectedTeam.division}</li>
              <li>{selectedTeam.abbreviation}</li>
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
