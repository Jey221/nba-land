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
