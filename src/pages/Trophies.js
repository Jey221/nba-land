/* import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getDetail } from '../data/datas';
 */
import '../css/pages/Trophies.css';
import Header from '../components/Header/Header';
import Loading from '../components/Loading';
import Footer from '../components/Footer/Footer';
import winLogo from '../assets/logos/SVG-nuggets.svg';
import CHistory from '../assets/images/trophies/chasingHistory.png';
import heatLogo from '../assets/logos/SVG-heat.svg';
import finals from '../assets/images/trophies/final.jpeg';
import Carroussel from '../components/Carroussel';
import ScrollBar from '../components/ScrollBar';

export default function Trophies() {
  return (
    <div>
      <Loading />
      <Header />
      <ScrollBar />
      <div>
        <div>Trophies</div>
        <h2>NBA Winner 2022/2023</h2>
        <img src={CHistory} alt="nba winners 2023" id="CHistory" />
        <div className="articles">
          <Carroussel />
          <div className="infoWinnerNba">
            <img src={finals} alt="logo des finales" id="finals" />
            <div className="opponentFinal">
              <img
                src={winLogo}
                alt="nba winners 2023"
                className="opponentLogo"
              />
              <p>4-1</p>
              <img
                src={heatLogo}
                alt="logo Miami Heat"
                className="opponentLogo"
              />
            </div>
            <p>The Nuggets are NBA champs after a Game 5</p>
            <p>MVP : Nikola Jokic</p>
          </div>
        </div>
        <h2>NBA Awards</h2>
        <div className="articles"></div>
        <h2>NBA All Teams</h2>
        <div className="articles"></div>
      </div>
      <Footer />
    </div>
  );
}
