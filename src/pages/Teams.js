import React from 'react';
import Header from '../components/Header/Header';
import { motion } from 'framer-motion';
import GalleryTeams from '../components/GalleryTeams';

export default function Teams() {
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
            <h2>Teams</h2>
            <GalleryTeams />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
