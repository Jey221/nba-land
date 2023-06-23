import React from 'react';
import '../css/components/GalleryTeams.css';
import { useEffect, useState } from 'react';
import { getDataTeams } from '../data/datas';
import LOGOS from '../data/LogosTeams';
import { Link } from 'react-router-dom';

export default function GalleryTeams() {
  const [datasTeam, setDatasTeam] = useState([]);

  useEffect(() => {
    async function teamLoad() {
      const datas = await getDataTeams();
      setDatasTeam(datas);
    }
    teamLoad();
  }, []);
  console.log(datasTeam);
  return (
    <>
      <div className="GalleryTeams">
        {datasTeam.map((team) => {
          const logo = LOGOS[team.abbreviation];

          return (
            <div key={team.id}>
              <Link to="#">
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
      </div>
    </>
  );
}
