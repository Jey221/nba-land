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
import Awards from '../components/Awards';
import { useEffect, useState } from 'react';

export default function Trophies() {
  const [allBlocs, setAllBlocs] = useState([]);
  useEffect(() => {
    setAllBlocs(document.querySelectorAll('.bloc'));
  }, []);
  console.log(allBlocs);

  /*   
  useEffect(() => {
    setAllBlocs(document.querySelectorAll('.bloc'));
  }, []);
  console.log(allBlocs);
  allBlocs.forEach((bloc) => {
    bloc.addEventListener('click', (e) => {
      console.log(e.target);
    });
  });
*/

  allBlocs.forEach((bloc) => {
    bloc.addEventListener('click', (e) => {
      //console.log(e.target);
      e.target.classList.add('active');

      for (let i = 0; i < allBlocs.length; i++) {
        if (allBlocs[i] !== e.target) {
          allBlocs[i].classList.remove('active');
        }
      }
    });
  });

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
        <div className="awardsContainer">
          <div className="articles bloc active">
            <Awards
              pictureId={'img'}
              playerName={'JEAN MARIE'}
              team={'bull'}
              position={'G'}
              pictureTeamPlayer={'img'}
              birth={'3/16/1994 (29yrs)'}
              award={'award'}
              pictureContains={'img'}
              statPTS={'20.1'}
              statREB={'10.2'}
              statAST={'8.2'}
              statFG={'54.3'}
              statRankPTS={'1'}
              statRankREB={'2'}
              statRankAST={'3'}
              statRankFG={'4'}
              stat={'20pts '}
              hightlightLink={'jeje6 JEJE320 LODJ'}
            />
          </div>
          <div className="articles bloc">
            <Awards
              pictureId={'img'}
              playerName={'FRANCIS HUSTER'}
              team={'bull'}
              position={'G'}
              pictureTeamPlayer={'img'}
              birth={'3/16/1994 (29yrs)'}
              award={'award'}
              pictureContains={'img'}
              statPTS={'20.1'}
              statREB={'10.2'}
              statAST={'8.2'}
              statFG={'54.3'}
              statRankPTS={'1'}
              statRankREB={'2'}
              statRankAST={'3'}
              statRankFG={'4'}
              stat={'20pts '}
              hightlightLink={'jeje6 JEJE320 LODJ'}
            />
          </div>
          <div className="articles bloc">
            <Awards
              pictureId={'img'}
              playerName={'BERNARD CAMPAND'}
              team={'bull'}
              position={'G'}
              pictureTeamPlayer={'img'}
              birth={'3/16/1994 (29yrs)'}
              award={'award'}
              pictureContains={'img'}
              statPTS={'20.1'}
              statREB={'10.2'}
              statAST={'8.2'}
              statFG={'54.3'}
              statRankPTS={'1'}
              statRankREB={'2'}
              statRankAST={'3'}
              statRankFG={'4'}
              stat={'20pts '}
              hightlightLink={'jeje6 JEJE320 LODJ'}
            />
          </div>
          <div className="articles bloc">
            <Awards
              pictureId={'img'}
              playerName={'player name'}
              team={'bull'}
              position={'G'}
              pictureTeamPlayer={'img'}
              birth={'3/16/1994 (29yrs)'}
              award={'award'}
              pictureContains={'img'}
              statPTS={'20.1'}
              statREB={'10.2'}
              statAST={'8.2'}
              statFG={'54.3'}
              statRankPTS={'1'}
              statRankREB={'2'}
              statRankAST={'3'}
              statRankFG={'4'}
              stat={'20pts '}
              hightlightLink={'jeje6 JEJE320 LODJ'}
            />
          </div>
          <div className="articles bloc">
            <Awards
              pictureId={'img'}
              playerName={'player name'}
              team={'bull'}
              position={'G'}
              pictureTeamPlayer={'img'}
              birth={'3/16/1994 (29yrs)'}
              award={'award'}
              pictureContains={'img'}
              statPTS={'20.1'}
              statREB={'10.2'}
              statAST={'8.2'}
              statFG={'54.3'}
              statRankPTS={'1'}
              statRankREB={'2'}
              statRankAST={'3'}
              statRankFG={'4'}
              stat={'20pts '}
              hightlightLink={'jeje6 JEJE320 LODJ'}
            />
          </div>
        </div>
        <h2>NBA All Teams</h2>
        <div className="articles"></div>
      </div>
      <Footer />
    </div>
  );
}
/*
  pictureId,
  playerName,
  team,
  position,
  pictureTeamPlayer,
  birth,
  award,
  pictureContains,
  statPTS,
  statREB,
  statAST,
  statFG,
  statRank,
  hightlightLink,

*/
/*   const [allBlocs, setAllBlocs] = useState([]);
  useEffect(() => {
    setAllBlocs(document.querySelectorAll('.bloc'));
  }, []);
  console.log(allBlocs);
  allBlocs.forEach((bloc) => {
    bloc.addEventListener('click', (e) => {
      console.log(e.target);
    });
  });
 */
