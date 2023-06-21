import React from 'react';
import Header from '../components/Header/Header';
import { motion } from 'framer-motion';

export default function Players() {
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
            <div>Players</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
