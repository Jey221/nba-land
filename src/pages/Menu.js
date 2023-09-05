import Header from '../components/Header/Header';
import CardsMenu from '../components/CardsMenu';
import Loading from '../components/Loading';
import Footer from '../components/Footer/Footer';
import ScrollBar from '../components/ScrollBar';

export default function Menu() {
  return (
    <div>
      <Loading />
      <Header />
      <ScrollBar />
      <div initial="hidden" animate="show">
        <div className="galleryMenu">
          <CardsMenu title={'Teams'} path={'/teams'} />
          <CardsMenu title={'Players'} path={'/players'} />
          <CardsMenu title={'Trophies'} path={'/trophies'} />
          <CardsMenu title={'Ranking'} path={'/ranking'} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
