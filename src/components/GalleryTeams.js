import '../css/components/GalleryTeams.css';
import { useEffect, useState } from 'react';
import { getDataTeams } from '../data/datas';
import LOGOS from '../data/LogosTeams';
import { Link } from 'react-router-dom';
import ModalTeam from './ModalTeam';
import { motion } from 'framer-motion';

export default function GalleryTeams() {
  // mise en place des hooks
  const [datasTeam, setDatasTeam] = useState([]); // données des équipes
  const [isOpenModal, setIsOpenModal] = useState(false); //ouverture de la modale
  const [selectedTeam, setSelectedTeam] = useState(null); //équipe sélectionnée

  // récupération des données des équipes
  useEffect(() => {
    async function teamLoad() {
      const datas = await getDataTeams();
      setDatasTeam(datas);
    }
    teamLoad();
  }, []);

  // click sur carte des équipes
  const handleClick = (e, team) => {
    setIsOpenModal(true);
    setSelectedTeam(team);
  };

  return (
    <>
      <div className="GalleryTeams">
        {datasTeam.map((team) => {
          // liaison entre le logo et l'équipe
          const logo = LOGOS[team.abbreviation];
          return (
            <motion.div
              initial={{ x: 25, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 5,
                duration: 0.6,
              }}
              key={team.id}
            >
              <div key={team.id} className="teamCard">
                <Link onClick={(e) => handleClick(e, team)}>
                  <img
                    src={logo}
                    alt={team.abbreviation}
                    className="logoTeam"
                    id={team.name}
                  />
                </Link>
              </div>
            </motion.div>
          );
        })}
        {isOpenModal && (
          <ModalTeam
            setIsOpenModal={setIsOpenModal}
            selectedTeam={selectedTeam}
          />
        )}
      </div>
    </>
  );
}
