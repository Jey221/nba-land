import { motion } from 'framer-motion';
import logoNba from '../assets/logos/SVG-nba.svg';
import '../css/pages/home.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="Home">
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.75,
        }}
        className="nav-bar"
      >
        <div initial="hidden" animate="show">
          <Link to={'/menu'}>
            <div className="logoZone">
              <img src={logoNba} alt="logo NBA" />
              <h1>Land</h1>
            </div>
          </Link>
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
