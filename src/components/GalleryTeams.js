import React from 'react';
import '../css/components/GalleryTeams.css';
import { useEffect, useState } from 'react';
import { getDataTeams } from '../data/datas';
import LOGOS from '../data/LogosTeams';
import { Link } from 'react-router-dom';
import ModalTeam from './ModalTeam';

export default function GalleryTeams() {
  const [datasTeam, setDatasTeam] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    async function teamLoad() {
      const datas = await getDataTeams();
      setDatasTeam(datas);
    }
    teamLoad();
  }, []);
  return (
    <>
      <div className="GalleryTeams">
        {datasTeam.map((team) => {
          const logo = LOGOS[team.abbreviation];

          return (
            <div key={team.id}>
              <Link onClick={setIsOpenModal.bind(this, true)}>
                <img
                  src={logo}
                  alt={team.abbreviation}
                  className="logoTeam"
                  id={team.name}
                />
              </Link>
            </div>
          );
        })}
        {isOpenModal && <ModalTeam setIsOpenModal={setIsOpenModal} />}
      </div>
    </>
  );
}
