import { useEffect, useState } from 'react';
import { getDataPlayers, getDataTeams } from '../data/datas';
import logoNba from '../assets/logos/SVG-nba.svg';
import '../css/pages/home.css';

import React from 'react';
export default function Home() {
  const [datasTeam, setDatasTeam] = useState([]);
  const [datasPlayer, setDatasPlayer] = useState([]);
  useEffect(() => {
    async function teamLoad() {
      const datas = await getDataTeams();
      setDatasTeam(datas);
    }
    teamLoad();
  }, []);
  console.log('teams', datasTeam);
  useEffect(() => {
    async function playerLoad() {
      const datas = await getDataPlayers();
      setDatasPlayer(datas);
    }
    playerLoad();
  }, []);
  console.log('Players', datasPlayer);
  return (
    <div className="Home">
      <div className="logoZone">
        <img src={logoNba} alt="logo NBA" />
        <h1>Land</h1>
      </div>
    </div>
  );
}
