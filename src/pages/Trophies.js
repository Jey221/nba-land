/* import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getDetail } from '../data/datas';
 */
import Header from '../components/Header/Header';
import Loading from '../components/Loading';
import Footer from '../components/Footer/Footer';

export default function Trophies() {
  return (
    <div>
      <Loading />
      <Header />
      <div>
        <div>Trophies</div>
      </div>
      <Footer />
    </div>
  );
}
