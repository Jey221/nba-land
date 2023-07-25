import Header from '../components/Header/Header';
import { motion } from 'framer-motion';
import GalleryPlayers from '../components/GalleryPlayers';
import Loading from '../components/Loading';

export default function Players() {
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
      >
        <div initial="hidden" animate="show">
          <div>
            <h2>Players</h2>
            <GalleryPlayers />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
