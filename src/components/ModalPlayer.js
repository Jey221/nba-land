import '../css/components/ModalPlayer.css';
import * as AiIcons from 'react-icons/ai';
import * as TbIcons from 'react-icons/tb';
import image from '../assets/images/backDunk.jpg';
import LOGOS from '../data/LogosTeams';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Positions from '../data/Positons';

export default function ModalPlayer({ setIsOpenModal, selectedPlayer }) {
  const [isHidden, setIsHidden] = useState(true);
  console.log(Positions[0].Position);
  // liaison entre le logo et l'équipe
  const Parquets = () => {
    const handlePark = () => {
      setIsHidden(true);
    };
    return (
      <>
        {!isHidden && (
          <div id="park">
            <AiIcons.AiOutlineCloseCircle
              onClick={handlePark}
              id="closeBtnPark"
            />
            <div className="ligneAvant">
              <div id="smallForward">
                <TbIcons.TbCircleNumber3
                  className={
                    selectedPlayer.position === 'F'
                      ? 'positions active'
                      : 'positions'
                  }
                />
                <div id="infoSmallForward" className="infoPosition">
                  <ul>
                    <li>POSITION : {Positions[2].Position}</li>
                    <li>INFO : {Positions[2].Infos}</li>
                    <li>PLAYER : {Positions[2].Players}</li>
                  </ul>
                </div>
              </div>
              <div id="center">
                <TbIcons.TbCircleNumber5
                  className={
                    selectedPlayer.position === 'C'
                      ? 'positions active'
                      : 'positions'
                  }
                />
                <div id="infoCenter" className="infoPosition">
                  <ul>
                    <li>POSITION : {Positions[4].Position}</li>
                    <li>INFO : {Positions[4].Infos}</li>
                    <li>PLAYER : {Positions[4].Players}</li>
                  </ul>
                </div>
              </div>
              <div id="powerForward">
                <TbIcons.TbCircleNumber4
                  id="powerForward"
                  className={
                    selectedPlayer.position === 'F'
                      ? 'positions active'
                      : 'positions'
                  }
                />
                <div id="infoPowerForward" className="infoPosition">
                  <ul>
                    <li>POSITION : {Positions[3].Position}</li>
                    <li>INFO : {Positions[3].Infos}</li>
                    <li>PLAYER : {Positions[3].Players}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="ligneArriere">
              <div id="pointGuard">
                <TbIcons.TbCircleNumber1
                  className={
                    selectedPlayer.position === 'G'
                      ? 'positions active'
                      : 'positions'
                  }
                />

                <div id="infoPointGuard" className="infoPosition">
                  <ul>
                    <li>POSITION : {Positions[1].Position}</li>
                    <li>INFO : {Positions[1].Infos}</li>
                    <li>PLAYER : {Positions[1].Players}</li>
                  </ul>
                </div>
              </div>
              <div id="shootingGuard">
                {' '}
                <TbIcons.TbCircleNumber2
                  className={
                    selectedPlayer.position === 'G'
                      ? 'positions active'
                      : 'positions'
                  }
                />
                <div id="infoShootingGuard" className="infoPosition">
                  <ul>
                    <li>POSITION : {Positions[2].Position}</li>
                    <li>INFO : {Positions[2].Infos}</li>
                    <li>PLAYER : {Positions[2].Players}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };
  const logo = LOGOS[selectedPlayer.team.abbreviation];
  return (
    <div className="modalBackground" onClick={setIsOpenModal.bind(this, false)}>
      <div className="modalContentPlayer" onClick={(e) => e.stopPropagation()}>
        <Parquets />
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
              <li className="position">
                <Link onClick={() => setIsHidden(false)}>
                  Position : {selectedPlayer.position}
                </Link>
              </li>
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
