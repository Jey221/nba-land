import '../css/pages/Ranking.css';
import Header from '../components/Header/Header';
import Loading from '../components/Loading';
import Footer from '../components/Footer/Footer';
import { RankingTeam } from '../data/RankingTeam';
import EastPicture from '../assets/images/east.jpg';
import WestPicture from '../assets/images/west.jpeg';

export default function Ranking() {
  /*   const [dataTeams, setDataTeams] = useState([]);
  const [dataScore, setDataScore] = useState([]);
  useEffect(() => {
    async function teamLoad() {
      const datas = await getRanking();
      setDataTeams(datas.sports[0].leagues[0]);
    }
    teamLoad();
  }, []);
  useEffect(() => {
    async function teamLoad() {
      const datas = await getScore();
      setDataScore(datas.events[0].competitions[0].competitors);
    }
    teamLoad();
  }, []);
 */ return (
    <div>
      <Loading />
      <Header />
      <div initial="hidden" animate="show">
        <h1>Ranking 2022/2023</h1>
        <div className="ranking">
          <div className="rankingList rankingWest">
            <img src={WestPicture} alt="Westside logo" />
            <table>
              <thead>
                <tr>
                  <th colSpan="3">Ranking West</th>
                </tr>
                <tr>
                  <th>rank</th>
                  <th>team</th>
                  <th>V-D</th>
                  <th>%</th>
                </tr>
              </thead>
              <tbody>
                {RankingTeam.RankingEast.map((team) => {
                  return (
                    <tr>
                      <td>{team.rank}</td>
                      <td>{team.name}</td>
                      <td>{team.ratio}</td>
                      <td>{team.pourc}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="rankingList rankingEast">
            <img src={EastPicture} alt="Eastside logo" />
            <table>
              <thead>
                <tr>
                  <th colSpan="3">Ranking East</th>
                </tr>
                <tr>
                  <th>rank</th>
                  <th>team</th>
                  <th>V-D</th>
                  <th>%</th>
                </tr>
              </thead>
              <tbody>
                {RankingTeam.RankingWest.map((team) => {
                  return (
                    <tr>
                      <td>{team.rank}</td>
                      <td>{team.name}</td>
                      <td>{team.ratio}</td>
                      <td>{team.pourc}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
