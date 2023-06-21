import React from 'react';
import { useEffect, useState } from 'react';
import { getDataPlayers, getDataTeams } from '../data/datas';
import { Link } from 'react-router-dom';
import logoBull from '../assets/logos/SVG-bulls.svg';
import { motion } from 'framer-motion';

export default function Menu() {
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
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.75,
      }}
      className="nav-bar"
    >
      <div initial="hidden" animate="show">
        <div>
          <img src={logoBull} alt="logoTest" />
          <div>Menu</div>
          <Link to={'/'}>
            <div>retour</div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

/* 
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.75,
      }}
      className="nav-bar"
    >
      <div initial="hidden" animate="show">
      </div>
    </motion.div>


*/
