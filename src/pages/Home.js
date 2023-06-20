import { useEffect, useState } from 'react';
import { getDataPlayers, getDataTeams } from '../datas';

import React from 'react';
export default function Home() {
  const [datasTeam, setDatasTeam] = useState([]);
  const [datasPlayer, setDatasPlayer] = useState([]);
  useEffect(() => {
    async function infoLoad() {
      const datas = await getDataTeams();
      setDatasTeam(datas);
    }
    infoLoad();
  }, []);
  console.log('teams', datasTeam);
  useEffect(() => {
    async function infoLoad() {
      const datas = await getDataPlayers();
      setDatasPlayer(datas);
    }
    infoLoad();
  }, []);
  console.log('Players', datasPlayer);
  return <div className="Home">Hello World</div>;
}
