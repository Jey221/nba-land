import { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import { motion } from 'framer-motion';
import { getDetail } from '../data/datas';
import Loading from '../components/Loading';
import Footer from '../components/Footer/Footer';

export default function Games() {
  const [dataGames, setDataGames] = useState();
  useEffect(() => {
    async function teamLoad() {
      const datas = await getDetail();
      setDataGames(datas);
    }
    teamLoad();
  }, []);
  console.log(dataGames);
  return (
    <div>
      <Loading />
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
            <div>Games</div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}
