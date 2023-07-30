import React, { useEffect, useState } from 'react';
import '../css/components/ScrollBar.css';

export default function ScrollBar() {
  const [totalHeight, setTotalHeight] = useState(
    document.documentElement.scrollHeight -
      document.documentElement.clientHeight
  );
  const [progressHeight, setProgressHeight] = useState(0);

  useEffect(() => {
    // Mettre à jour la hauteur totale de la page lorsque la composante est montée
    setTotalHeight(
      document.documentElement.scrollHeight -
        document.documentElement.clientHeight
    );
  }, []);

  useEffect(() => {
    // Mettre à jour la hauteur de progression lorsque l'utilisateur fait défiler la page
    const updateProgress = () => {
      const newProgress = (window.scrollY / totalHeight) * 100;
      setProgressHeight(newProgress);
    };

    // Attacher l'écouteur d'événement pour le défilement
    window.addEventListener('scroll', updateProgress);

    // Supprimer l'écouteur d'événement lorsque la composante est démontée
    return () => {
      window.removeEventListener('scroll', updateProgress);
    };
  }, [totalHeight]);

  const progressBarStyle = {
    height: `${progressHeight}%`,
    opacity: `${progressHeight}%`,
  };

  const handleProgressBarClick = (e) => {
    const newPageScroll =
      (e.clientY / e.currentTarget.offsetHeight) * totalHeight;
    window.scrollTo({
      top: newPageScroll,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Barre de progression de défilement */}
      <div
        className="scrollbar"
        style={progressBarStyle}
        //onClick={handleProgressBarClick}
      ></div>
      <div className="clickScrollbar" onClick={handleProgressBarClick}></div>
    </>
  );
}
