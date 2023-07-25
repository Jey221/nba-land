import { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import { motion } from 'framer-motion';
import { getDetail } from '../data/datas';

export default function Details() {
  const [dataDetailTeam, setDataDetailTeam] = useState();

  useEffect(() => {
    async function detailLoad() {
      const datas = await getDetail();
      setDataDetailTeam(datas);
    }
    detailLoad();
  }, []);

  console.log(dataDetailTeam);

  return (
    <div>
      <Header />
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.75,
        }}
        className=""
      >
        <div initial="hidden" animate="show">
          <div>
            <div>Détail team</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
