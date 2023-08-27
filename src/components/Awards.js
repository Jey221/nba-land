import React from 'react';
import { Link } from 'react-router-dom';

export default function Awards({
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
}) {
  return (
    <>
      <div className="topBloc">
        <div className="rondAward">
          <img src={pictureId} alt={playerName} />
        </div>
        <p className="awardTitle">{award}</p>
        <div className="line"></div>
        <p className="playerNameTitle">{playerName}</p>
      </div>
      <div className="contenuAward">
        <img src={pictureContains} alt={playerName} />
        <div className="infosAward">
          <h2>{playerName}</h2>
          <img className="logoTeamPlayer" src={pictureTeamPlayer} alt={team} />
          <p>
            {team} {position}
          </p>
          <p>Birthdate {birth}</p>
          <div className="statsAward">
            <div className="topStat">
              <p>2022-2023 Season Stats</p>
            </div>
            <div className="contentStat">
              <div>
                <p>PTS</p>
                <p>{statPTS}</p>
                <p>{statRank}</p>
              </div>
              <div>
                <p>PTS</p>
                <p>{statREB}</p>
                <p>{statRank}</p>
              </div>
              <div>
                <p>PTS</p>
                <p>{statAST}</p>
                <p>{statRank}</p>
              </div>
              <div>
                <p>PTS</p>
                <p>{statFG}</p>
                <p>{statRank}</p>
              </div>
            </div>
          </div>
          <Link>{hightlightLink}</Link>
        </div>
      </div>
    </>
  );
}

/* 

<div className="bloc active">
        <div className="bloc-haut">
          <div className="rond">
            <img src={pictureId} />
          </div>
          <p className="awardTitle">{award}</p>
          <div className="line"></div>
          <p className="playerNameTitle">{playerName}</p>
        </div>
        <div className="contenu">
            <img src={picture} alt="">
            <div className="infos">
                <h2>{playerName}</h2>
                <p>{stat}</p>
                <Link>{hightlightLink}</Link>
            </div>
        </div>
      </div>

*/
