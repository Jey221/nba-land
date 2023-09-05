import { motion } from 'framer-motion';
import logoNba from '../assets/logos/SVG-nba.svg';
import '../css/pages/home.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const overlapEls = document.querySelectorAll('.overlap') || [];
    overlapEls.forEach((el) => {
      const chars = [...el.textContent];
      el.innerHTML = '';
      chars.forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.setProperty('--index', index);
        el.append(span);
      });
    });
  }, []);

  return (
    <div className="Home">
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.75,
        }}
        className="nav-bar"
      >
        <div initial="hidden" animate="show">
          <Link to={'/menu'}>
            <div className="logoHome">
              <img id="logoNbaHome" src={logoNba} alt="logo NBA" />
              <h1 className="overlap overlap-front">Land</h1>
            </div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
