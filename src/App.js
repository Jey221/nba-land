import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './css/App.css';
import Home from './pages/Home';
import Menu from './pages/Menu';

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
            <Route path="/teams" element={''} />
            <Route path="/players" element={''} />
            <Route path="/game" element={''} />
            <Route path="/state" element={''} />
            <Route path="/erreur" element={''} />
          </Routes>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
/* 

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
        </motion.div>
      </AnimatePresence>

*/
