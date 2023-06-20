import { useEffect, useState } from 'react';
import { getDataPlayers, getDataTeams } from '../data/datas';

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
  return <div className="Home">NBA Land</div>;
}
