import React, { useState } from 'react';
import * as BsIcons from 'react-icons/bs';
import ModalPlay from './ModalPlay';
import { Link } from 'react-router-dom';

export default function Awards({
  pictureId,
  playerName,
  team,
  teamAb,
  position,
  pictureTeamPlayer,
  birth,
  award,
  pictureContains,
  statTitle1,
  statPTS,
  statTitle2,
  statREB,
  statTitle3,
  statAST,
  statTitle4,
  statFG,
  statRankPTS,
  statRankREB,
  statRankAST,
  statRankFG,
  hightlightLink,
}) {
  const [isOpenModalPlay, setIsOpenModalPlay] = useState(false);
  function modalVideo() {
    setIsOpenModalPlay(true);
  }

  return (
    <>
      <div className="topBloc">
        <div className="IDAward">
          <img src={pictureId} alt={playerName} />
        </div>
        <p className="awardTitle">{award}</p>
        <div className="line"></div>
        <p className="playerNameTitle">{playerName}</p>
      </div>
      <div className="contenuAward">
        <img
          src={pictureContains}
          alt={playerName}
          className="pictureContent"
          id={position}
        />
        <div className="infosAward">
          <h2>{playerName}</h2>
          <div className="infoTeamZone">
            <Link to={`/teams/details/${teamAb}`}>
              <img
                className="logoTeamPlayer"
                src={pictureTeamPlayer}
                alt={team}
                onClick={console.log('hi')}
              />
            </Link>
            <p>{team}</p>
            <p>"{position}"</p>
          </div>
          <p>Birthdate {birth}</p>
          <div className="statsAward">
            <div className="topStat">
              <p>2022-2023 Season Stats</p>
            </div>
            <div className="contentStat">
              <div className="statRow">
                <p className="statTitle">{statTitle1}</p>
                <p className="statNum">{statPTS}</p>
                <p className="statRan">{statRankPTS}</p>
              </div>
              <div className="statRow">
                <p className="statTitle">{statTitle2}</p>
                <p className="statNum">{statREB}</p>
                <p className="statRan">{statRankREB}</p>
              </div>
              <div className="statRow">
                <p className="statTitle">{statTitle3}</p>
                <p className="statNum">{statAST}</p>
                <p className="statRan">{statRankAST}</p>
              </div>
              <div className="statRow">
                <p className="statTitle">{statTitle4}</p>
                <p className="statNum">{statFG}</p>
                <p className="statRan">{statRankFG}</p>
              </div>
            </div>
          </div>
          <button
            className="btnVideo"
            onClick={(e) => {
              e.stopPropagation();
              modalVideo();
            }}
          >
            <p>highlights</p>
            <BsIcons.BsYoutube />
          </button>
        </div>
      </div>
      {isOpenModalPlay && (
        <ModalPlay
          setIsOpenModalFinal={setIsOpenModalPlay}
          url={hightlightLink}
        />
      )}
    </>
  );
}
