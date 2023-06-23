import React from 'react';
import { useEffect, useState } from 'react';
import { getDataTeams } from '../data/datas';
import LOGOS from '../data/LogosTeams';

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
      <div className="GalleryTeams">GalleryTeams</div>
      {datasTeam.map((team) => {
        const logo = LOGOS[team.abbreviation];

        return (
          <div key={team.id} className="logoTeam">
            <img src={logo} alt={team.abbreviation} />
          </div>
        );
      })}
    </>
  );
}
/* (team.abbreviation===)?:
      <img src={LOGOS.LAC} alt="" />
      <img src={LOGOS.BOS} alt="" />
      <img src={LOGOS.DEN} alt="" />
      <img src={LOGOS.WAS} alt="" />



      
*/
