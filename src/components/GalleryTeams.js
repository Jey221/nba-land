import React from 'react';
import '../css/components/GalleryTeams.css';
import { useEffect, useState } from 'react';
import { getDataTeams } from '../data/datas';
import LOGOS from '../data/LogosTeams';
import { Link } from 'react-router-dom';
import ModalTeam from './ModalTeam';
import { motion } from 'framer-motion';

export default function GalleryTeams() {
  const [datasTeam, setDatasTeam] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);

  useEffect(() => {
    async function teamLoad() {
      const datas = await getDataTeams();
      setDatasTeam(datas);
    }
    teamLoad();
  }, []);

  const handleClick = (e, team) => {
    setIsOpenModal(true);
    setSelectedTeam(team);
  };
  return (
    <>
      <div className="GalleryTeams">
        {datasTeam.map((team) => {
          const logo = LOGOS[team.abbreviation];
          return (
            <motion.div
              initial={{ x: 25, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1,
              }}
              className="Menu"
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
/* 
import { motion } from 'framer-motion';

      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.75,
        }}
        className="Menu"
      >

      </motion.div>

*/
