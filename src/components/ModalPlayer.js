import '../css/components/ModalPlayer.css';
import * as AiIcons from 'react-icons/ai';
import image from '../assets/images/backDunk.jpg';
import LOGOS from '../data/LogosTeams';

export default function ModalPlayer({ setIsOpenModal, selectedPlayer }) {
  const logo = LOGOS[selectedPlayer.team.abbreviation];

  console.log(selectedPlayer);
  return (
    <div className="modalBackground" onClick={setIsOpenModal.bind(this, false)}>
      <div className="modalContentPlayer" onClick={(e) => e.stopPropagation()}>
        <div className="leftSection">
          <div className="photoPlayer">
            <img src={image} alt="joueur" style={{ width: '145px' }} />
          </div>
          <div className="logoTeamPlayer">
            <img src={logo} alt="logo" style={{ width: '100px' }} />
          </div>
        </div>
        <div className="rightSection">
          <div
            className="closeZonePlayer"
            onClick={setIsOpenModal.bind(this, false)}
          >
            <AiIcons.AiOutlineCloseCircle />
          </div>

          <div className="infoPlayer">
            <h2>
              {selectedPlayer.first_name} {selectedPlayer.last_name}
            </h2>
            <ul className="detailInfosPlayer">
              <li>Position : {selectedPlayer.position}</li>
              <li>Height feet : {selectedPlayer.height_feet}</li>
              <li>Height inches : {selectedPlayer.height_inches}</li>
              <li>Weight : {selectedPlayer.weight_pounds}</li>
            </ul>
          </div>
          <div className="nameTeamPlayer">
            <h2>{selectedPlayer.team.full_name}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 
<AiOutlineCloseCircle/>
*/
/* 
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

*/
