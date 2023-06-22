import React from 'react';
import { useEffect, useState } from 'react';
import { getDataPlayers, getDataTeams } from '../data/datas';
// import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../components/Header/Header';
import CardsMenu from '../components/CardsMenu';

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
    <div>
      <Header />
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.75,
        }}
        className="Menu"
      >
        <div initial="hidden" animate="show">
          <div>
            <div>Menu</div>
            <CardsMenu />
          </div>
        </div>
      </motion.div>
    </div>
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
