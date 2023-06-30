import '../css/components/CardsMenu.css';
import { Link } from 'react-router-dom';

export default function CardsMenu({ title, path }) {
  // carte des différents page sur le menu
  return (
    <Link to={path}>
      <div className="cardsMenu" id={title + 'Cards'}>
        <h2>{title}</h2>
      </div>
    </Link>
  );
}
