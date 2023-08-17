import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './css/App.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Teams from './pages/Teams';
import Players from './pages/Players';
import Details from './pages/DetailsTeam';
import Error from './pages/Error';
import Ranking from './pages/Ranking';
import Trophies from './pages/Trophies';

function App() {
  return (
    <AnimatePresence>
      <motion.div
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 5.75,
        }}
        variants={{
          initialState: {
            opacity: 0,
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
          },
          animateState: {
            opacity: 1,
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
          },
          exitState: {
            clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)',
          },
        }}
        className="base-page-size"
      >
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/teams" element={<Teams />} />
            <Route exact path="/teams/details/:idTeams" element={<Details />} />
            <Route path="/players" element={<Players />} />
            <Route path="/trophies" element={<Trophies />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
