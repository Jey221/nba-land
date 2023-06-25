import { useEffect, useState } from 'react';
import { getDataTeams } from '../data/datas';

const ModalTeam = () => {
  const [datasTeam, setDatasTeam] = useState([]);

  useEffect(() => {
    async function teamLoad() {
      const datas = await getDataTeams();
      setDatasTeam(datas);
    }
    teamLoad();
  }, []);
  console.log('datasTeam', datasTeam);

  return (
    <div className="modalBackground">
      <div className="modalContent">
        <div className="modalHeader"></div>
        <div className="modalBody"></div>
      </div>
    </div>
  );
};

export default ModalTeam;
