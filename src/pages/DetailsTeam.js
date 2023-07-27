import '../css/pages/detailTeam.css';
import { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import { getDetail } from '../data/datas';
import Footer from '../components/Footer/Footer';
import Loading from '../components/Loading';
import { useParams } from 'react-router';

export default function Details() {
  const [dataDetailTeam, setDataDetailTeam] = useState([]);
  const [currentTeam, setCurrentTeam] = useState();
  const id = useParams();

  useEffect(() => {
    async function detailLoad() {
      const datas = await getDetail();
      setDataDetailTeam(datas);
    }
    detailLoad();
  }, []);

  useEffect(() => {
    const teamPage = dataDetailTeam.find(
      (team) => team.team.name === id.idTeams
    );
    if (teamPage) {
      setCurrentTeam(teamPage.team);
    }
  }, [dataDetailTeam, id.idTeams]);

  console.log(currentTeam);
  return (
    <div>
      <Loading />
      <Header />
      <div initial="hidden" animate="show">
        <div>
          {currentTeam ? (
            <div
              className="zoneDetail"
              style={{ backgroundColor: `#${currentTeam.color}` }}
            >
              <div>{currentTeam.displayName}</div>
              <div>{currentTeam.abbreviation}</div>
              <div>{currentTeam.location}</div>
              <div>{currentTeam.name}</div>
              <div>{currentTeam.nickname}</div>
              <div>{currentTeam.shortDisplayName}</div>
              <div>{currentTeam.slug}</div>
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
