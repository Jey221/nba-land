import React from 'react';
import '../css/components/Carroussel.css';
import imageWin1 from '../assets/images/trophies/history.png';
import imageWin2 from '../assets/images/trophies/denver-win.jpg';
import imageWin3 from '../assets/images/trophies/denver-win2.jpg';
import imageWin4 from '../assets/images/trophies/denver-win3.jpg';
import imageWin5 from '../assets/images/trophies/final_mvp.jpg';

export default function Carroussel() {
  return (
    <div className="sliderZone">
      <div className="slider">
        <div className="slideTrack">
          <div className="slide" style={{ width: '37vw' }}>
            <img src={imageWin1} alt="imageWin1" />
          </div>
          <div className="slide" style={{ width: '37vw' }}>
            <img src={imageWin2} alt="imageWin2" />
          </div>
          <div className="slide" style={{ width: '37vw' }}>
            <img src={imageWin3} alt="imageWin3" />
          </div>
          <div className="slide">
            <img src={imageWin4} alt="imageWin4" />
          </div>
          <div className="slide" style={{ width: '37vw' }}>
            <img src={imageWin5} alt="imageWin5" />
          </div>
        </div>
      </div>
    </div>
  );
}
