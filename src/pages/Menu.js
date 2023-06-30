import { motion } from 'framer-motion';
import Header from '../components/Header/Header';
import CardsMenu from '../components/CardsMenu';

export default function Menu() {
  return (
    <div>
      <Header />
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.75,
        }}
        className="Menu"
      >
        <div initial="hidden" animate="show">
          <div className="galleryMenu">
            <CardsMenu title={'Teams'} path={'/teams'} />
            <CardsMenu title={'Players'} path={'/players'} />
            <CardsMenu title={'Games'} path={'/games'} />
            <CardsMenu title={'States'} path={'/states'} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
