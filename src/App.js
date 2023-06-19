import { useEffect, useState } from 'react';
import './App.css';
import { getDataTeams } from './datas';

function App() {
  const [datas, setDatas] = useState([]);
  // load data
  useEffect(() => {
    async function infoLoad() {
      const datas = await getDataTeams();
      setDatas(datas);
    }
    infoLoad();
  }, []);
  console.log('teams', datas);
  return (
    <div className="App">
      Hello World
      {datas.map((data) => {
        console.log(data);
        return (
          <div>
            <p>team{data.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
