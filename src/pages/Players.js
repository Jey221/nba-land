import Header from '../components/Header/Header';
import GalleryPlayers from '../components/GalleryPlayers';
import Loading from '../components/Loading';
import Footer from '../components/Footer/Footer';

export default function Players() {
  return (
    <div>
      <Loading />
      <Header />
      <div initial="hidden" animate="show">
        <div>
          <h2>Players</h2>
          <GalleryPlayers />
        </div>
      </div>
      <Footer />
    </div>
  );
}
