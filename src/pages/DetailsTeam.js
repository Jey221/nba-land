import '../css/pages/detailTeam.css';
import { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import { getDetail } from '../data/datas';
import Footer from '../components/Footer/Footer';
import Loading from '../components/Loading';
import { useParams } from 'react-router';
import PARQUETS from '../data/Parquets';
import LOGOS from '../data/LogosTeams';
import ARENA from '../data/Arena';
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';
// import * as FaIcons from 'react-icons/fa';
import ScrollBar from '../components/ScrollBar';
import { Abbreviations } from '../data/Abreviations';
import { RankingAllTeam, RankingTeam } from '../data/RankingTeam';

export default function Details() {
  const [dataDetailTeam, setDataDetailTeam] = useState([]); // hook pour récupération des données des équipes
  const [currentTeam, setCurrentTeam] = useState(); // hook pour récupération des données de l'équipe sélectionnée
  const id = useParams(); // localisation de l'équipe sélectionnée grâce a l'url
  // Chargement des données des équipes
  useEffect(() => {
    async function detailLoad() {
      const datas = await getDetail(id.idTeams);
      setDataDetailTeam(datas);
    }
    detailLoad();
  }, [id.idTeams]);

  // Mise en place d'un hook pour récupérer l'équipe après chargement des données
  useEffect(() => {
    if (dataDetailTeam.team) {
      setCurrentTeam(dataDetailTeam.team);
    }
  }, [dataDetailTeam]);

  return (
    <div>
      {/* <Loading /> */}
      <Header />
      <div initial="hidden" animate="show">
        <div>
          {currentTeam ? (
            <>
              <ScrollBar />
              <div
                className="zoneDetail"
                style={{ backgroundColor: `#${currentTeam.color}CC` }}
              >
                <div className="zone1">
                  <div className="leftZone">
                    <div className="logo">
                      <img
                        src={LOGOS[Abbreviations[currentTeam.abbreviation]]}
                        alt={currentTeam.abbreviation}
                        className="logoTeamDetail"
                        id={currentTeam.abbreviation}
                      />
                    </div>
                  </div>
                  <div className="rightZone">
                    <div className="fullName">
                      <h1>{currentTeam.displayName},</h1>
                    </div>
                    <div className="info">
                      <p>
                        {currentTeam.location}, {currentTeam.abbreviation}
                      </p>
                      <p>{currentTeam.standingSummary}</p>
                      <p>
                        Ranking :{' '}
                        {RankingAllTeam[dataDetailTeam.team.abbreviation]}
                      </p>
                      <div className="colorsTeam">
                        <div
                          className="color colorTeam1"
                          style={{ backgroundColor: `#${currentTeam.color}` }}
                        ></div>
                        <div
                          className="color colorTeam2"
                          style={{
                            backgroundColor: `#${currentTeam.alternateColor}`,
                          }}
                        ></div>
                      </div>
                      <img
                        src={currentTeam.logos[0].href}
                        alt={currentTeam.abbreviation}
                        className="logoTeamExpl"
                      />
                    </div>
                  </div>
                </div>
                <h2>{currentTeam.franchise.venue.fullName}</h2>
                <h4>
                  <BiIcons.BiCurrentLocation />
                  {currentTeam.franchise.venue.address &&
                  currentTeam.franchise.venue.address.city &&
                  currentTeam.franchise.venue.address.state
                    ? `${currentTeam.franchise.venue.address.city}, ${currentTeam.franchise.venue.address.state}`
                    : ''}{' '}
                </h4>
                <p>
                  <BsIcons.BsFillPersonFill />{' '}
                  {currentTeam.franchise.venue.capacity}
                </p>
                <div className="zone3">
                  <div
                    className="parquet"
                    style={{
                      backgroundImage: `url(${
                        PARQUETS[Abbreviations[currentTeam.abbreviation]]
                      })`,
                    }}
                  ></div>
                  <div
                    className="arena"
                    style={{
                      backgroundImage: `url(${
                        ARENA[Abbreviations[currentTeam.abbreviation]]
                      })`,
                    }}
                  ></div>
                </div>
              </div>
            </>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

/* 
                <h2>{currentTeam.displayName} statistics</h2>
                               <div className="zone2">
                  {currentTeam.record.items.map((item, index) => {
                    //console.log('item', item);
                    let icon;
                    if (item.description === 'Overall Record') {
                      icon = <BiIcons.BiStats />;
                    } else if (item.description === 'Home Record') {
                      icon = <BiIcons.BiHome />;
                    } else if (item.description === 'Away Record') {
                      icon = <FaIcons.FaPlane />;
                    }
                    return (
                      <div
                        className="statList"
                        id={item.description}
                        key={index}
                      >
                        {icon}
                        <p>{item.description}</p>
                        <ul>
                          {item.stats.map((stat, index) => {
                            //console.log('stat', stat);
                            const uniqueKey = `${stat.name}-${stat.value}-${index}`;
                            return (
                              <li key={uniqueKey}>
                                <BiIcons.BiBasketball
                                  style={{ marginRight: '3%' }}
                                />
                                {stat.name} : {stat.value}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>

*/
