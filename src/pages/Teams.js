import Header from '../components/Header/Header';
import GalleryTeams from '../components/GalleryTeams';
import Loading from '../components/Loading';

export default function Teams() {
  return (
    <div>
      <Loading />
      <Header />
      <div initial="hidden" animate="show">
        <div>
          <h2>Teams</h2>
          <GalleryTeams />
        </div>
      </div>
    </div>
  );
}
