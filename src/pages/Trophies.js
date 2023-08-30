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
import idMvp from '../assets/images/trophies/IDJokic.png';
import Carroussel from '../components/Carroussel';
import ScrollBar from '../components/ScrollBar';
import Awards from '../components/Awards';
import { useEffect, useState } from 'react';
import { AwardsDatas } from '../data/Awards';
import Dropdown from '../components/Dropdown';

export default function Trophies() {
  const [allBlocs, setAllBlocs] = useState([]);
  useEffect(() => {
    setAllBlocs(document.querySelectorAll('.bloc'));
  }, []);
  allBlocs.forEach((bloc) => {
    bloc.addEventListener('click', (e) => {
      console.log(e.target.classList.contains('active'));
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
      {/* <Loading /> */}
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
              <p style={{ fontSize: 'xxx-large' }}>4-1</p>
              <img
                src={heatLogo}
                alt="logo Miami Heat"
                className="opponentLogo"
              />
            </div>
            <p>The Nuggets are NBA champs after a Game 5</p>
            <p>MVP : Nikola Jokic</p>
            <div className="idMVP">
              <img src={idMvp} alt="Nikola Jokic" className="idJokic" />
            </div>
          </div>
        </div>
        <h2 style={{ marginTop: '3%' }}>All Teams NBA</h2>
        <div className="allTeamContainer">
          <Dropdown
            allTeam={'ALL TEAM'}
            team1={'1st TEAM ALL NBA'}
            team2={'2nd TEAM ALL NBA'}
            team3={'3th TEAM ALL NBA'}
          />
          <Dropdown
            allTeam={'ALL ROOKIE'}
            team1={'1st TEAM ROOKIE'}
            team2={'2nd TEAM ROOKIE'}
          />
          <Dropdown
            allTeam={'ALL DEFENSIVE'}
            team1={'1st TEAM DEFENSIVE'}
            team2={'2nd TEAM DEFENSIVE'}
          />
        </div>
        <h2>NBA Awards</h2>
        <div className="awardsContainer">
          <div className="articles bloc active">
            <Awards
              pictureId={AwardsDatas.MVP.pictureID}
              playerName={AwardsDatas.MVP.name}
              team={AwardsDatas.MVP.team}
              position={AwardsDatas.MVP.position}
              pictureTeamPlayer={AwardsDatas.MVP.pictureTeamPlayer}
              birth={AwardsDatas.MVP.birth}
              award={AwardsDatas.MVP.award}
              pictureContains={AwardsDatas.MVP.pictureContains}
              statTitle1={AwardsDatas.MVP.statTitle1}
              statPTS={AwardsDatas.MVP.statPTS}
              statTitle2={AwardsDatas.MVP.statTitle2}
              statREB={AwardsDatas.MVP.statREB}
              statTitle3={AwardsDatas.MVP.statTitle3}
              statAST={AwardsDatas.MVP.statAST}
              statTitle4={AwardsDatas.MVP.statTitle4}
              statFG={AwardsDatas.MVP.statFG}
              statRankPTS={AwardsDatas.MVP.statRankPTS}
              statRankREB={AwardsDatas.MVP.statRankREB}
              statRankAST={AwardsDatas.MVP.statRankAST}
              statRankFG={AwardsDatas.MVP.statRankFG}
              hightlightLink={'piloupilou.com'}
            />
          </div>
          <div className="articles bloc">
            <Awards
              pictureId={AwardsDatas.DEF.pictureID}
              playerName={AwardsDatas.DEF.name}
              team={AwardsDatas.DEF.team}
              position={AwardsDatas.DEF.position}
              pictureTeamPlayer={AwardsDatas.DEF.pictureTeamPlayer}
              birth={AwardsDatas.DEF.birth}
              award={AwardsDatas.DEF.award}
              pictureContains={AwardsDatas.DEF.pictureContains}
              statTitle1={AwardsDatas.DEF.statTitle1}
              statTitle2={AwardsDatas.DEF.statTitle2}
              statTitle3={AwardsDatas.DEF.statTitle3}
              statTitle4={AwardsDatas.DEF.statTitle4}
              statPTS={AwardsDatas.DEF.statPTS}
              statREB={AwardsDatas.DEF.statREB}
              statAST={AwardsDatas.DEF.statBLK}
              statFG={AwardsDatas.DEF.statSTL}
              statRankPTS={AwardsDatas.DEF.statRankPTS}
              statRankREB={AwardsDatas.DEF.statRankREB}
              statRankAST={AwardsDatas.DEF.statRankBLK}
              statRankFG={AwardsDatas.DEF.statRankSTL}
              hightlightLink={'piloupilou.com'}
            />
          </div>
          <div className="articles bloc">
            <Awards
              pictureId={AwardsDatas.MAN.pictureID}
              playerName={AwardsDatas.MAN.name}
              team={AwardsDatas.MAN.team}
              position={AwardsDatas.MAN.position}
              pictureTeamPlayer={AwardsDatas.MAN.pictureTeamPlayer}
              birth={AwardsDatas.MAN.birth}
              award={AwardsDatas.MAN.award}
              pictureContains={AwardsDatas.MAN.pictureContains}
              statTitle1={AwardsDatas.MAN.statTitle1}
              statTitle2={AwardsDatas.MAN.statTitle2}
              statTitle3={AwardsDatas.MAN.statTitle3}
              statTitle4={AwardsDatas.MAN.statTitle4}
              statPTS={AwardsDatas.MAN.statPTS}
              statREB={AwardsDatas.MAN.statREB}
              statAST={AwardsDatas.MAN.statAST}
              statFG={AwardsDatas.MAN.statFG}
              statRankPTS={AwardsDatas.MAN.statRankPTS}
              statRankREB={AwardsDatas.MAN.statRankREB}
              statRankAST={AwardsDatas.MAN.statRankAST}
              statRankFG={AwardsDatas.MAN.statRankFG}
              hightlightLink={'piloupilou.com'}
            />
          </div>
          <div className="articles bloc">
            <Awards
              pictureId={AwardsDatas.CLU.pictureID}
              playerName={AwardsDatas.CLU.name}
              team={AwardsDatas.CLU.team}
              position={AwardsDatas.CLU.position}
              pictureTeamPlayer={AwardsDatas.CLU.pictureTeamPlayer}
              birth={AwardsDatas.CLU.birth}
              award={AwardsDatas.CLU.award}
              pictureContains={AwardsDatas.CLU.pictureContains}
              statTitle1={AwardsDatas.CLU.statTitle1}
              statTitle2={AwardsDatas.CLU.statTitle2}
              statTitle3={AwardsDatas.CLU.statTitle3}
              statTitle4={AwardsDatas.CLU.statTitle4}
              statPTS={AwardsDatas.CLU.statPTS}
              statREB={AwardsDatas.CLU.statREB}
              statAST={AwardsDatas.CLU.statAST}
              statFG={AwardsDatas.CLU.statFG}
              statRankPTS={AwardsDatas.CLU.statRankPTS}
              statRankREB={AwardsDatas.CLU.statRankREB}
              statRankAST={AwardsDatas.CLU.statRankAST}
              statRankFG={AwardsDatas.CLU.statRankFG}
              hightlightLink={'piloupilou.com'}
            />
          </div>
          <div className="articles bloc">
            <Awards
              pictureId={AwardsDatas.MIP.pictureID}
              playerName={AwardsDatas.MIP.name}
              team={AwardsDatas.MIP.team}
              position={AwardsDatas.MIP.position}
              pictureTeamPlayer={AwardsDatas.MIP.pictureTeamPlayer}
              birth={AwardsDatas.MIP.birth}
              award={AwardsDatas.MIP.award}
              pictureContains={AwardsDatas.MIP.pictureContains}
              statTitle1={AwardsDatas.MIP.statTitle1}
              statTitle2={AwardsDatas.MIP.statTitle2}
              statTitle3={AwardsDatas.MIP.statTitle3}
              statTitle4={AwardsDatas.MIP.statTitle4}
              statPTS={AwardsDatas.MIP.statPTS}
              statREB={AwardsDatas.MIP.statREB}
              statAST={AwardsDatas.MIP.statAST}
              statFG={AwardsDatas.MIP.statFG}
              statRankPTS={AwardsDatas.MIP.statRankPTS}
              statRankREB={AwardsDatas.MIP.statRankREB}
              statRankAST={AwardsDatas.MIP.statRankAST}
              statRankFG={AwardsDatas.MIP.statRankFG}
              hightlightLink={'piloupilou.com'}
            />
          </div>
          <div className="articles bloc">
            <Awards
              pictureId={AwardsDatas.ROO.pictureID}
              playerName={AwardsDatas.ROO.name}
              team={AwardsDatas.ROO.team}
              position={AwardsDatas.ROO.position}
              pictureTeamPlayer={AwardsDatas.ROO.pictureTeamPlayer}
              birth={AwardsDatas.ROO.birth}
              award={AwardsDatas.ROO.award}
              pictureContains={AwardsDatas.ROO.pictureContains}
              statTitle1={AwardsDatas.ROO.statTitle1}
              statTitle2={AwardsDatas.ROO.statTitle2}
              statTitle3={AwardsDatas.ROO.statTitle3}
              statTitle4={AwardsDatas.ROO.statTitle4}
              statPTS={AwardsDatas.ROO.statPTS}
              statREB={AwardsDatas.ROO.statREB}
              statAST={AwardsDatas.ROO.statAST}
              statFG={AwardsDatas.ROO.statFG}
              statRankPTS={AwardsDatas.ROO.statRankPTS}
              statRankREB={AwardsDatas.ROO.statRankREB}
              statRankAST={AwardsDatas.ROO.statRankAST}
              statRankFG={AwardsDatas.ROO.statRankFG}
              hightlightLink={'piloupilou.com'}
            />
          </div>
          <div className="articles bloc">
            <Awards
              pictureId={AwardsDatas.COA.pictureID}
              playerName={AwardsDatas.COA.name}
              team={AwardsDatas.COA.team}
              position={AwardsDatas.COA.position}
              pictureTeamPlayer={AwardsDatas.COA.pictureTeamPlayer}
              birth={AwardsDatas.COA.birth}
              award={AwardsDatas.COA.award}
              pictureContains={AwardsDatas.COA.pictureContains}
              statTitle1={AwardsDatas.COA.statTitle1}
              statTitle2={AwardsDatas.COA.statTitle2}
              statTitle3={AwardsDatas.COA.statTitle3}
              statTitle4={AwardsDatas.COA.statTitle4}
              statPTS={AwardsDatas.COA.statWIN}
              statREB={AwardsDatas.COA.statLOS}
              statAST={AwardsDatas.COA.statRAT}
              statFG={AwardsDatas.COA.statGAM}
              statRankPTS={AwardsDatas.COA.statRankWIN}
              statRankREB={AwardsDatas.COA.statRankLOS}
              statRankAST={AwardsDatas.COA.statRankRAT}
              statRankFG={AwardsDatas.COA.statRankGAM}
              hightlightLink={'piloupilou.com'}
            />
          </div>
        </div>
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
