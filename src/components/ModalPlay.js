import React from 'react';
import * as AiIcons from 'react-icons/ai';
import ReactPlayer from 'react-player';
import '../css/components/ModalPlay.css';
export default function ModalPlay({ setIsOpenModalFinal }) {
  return (
    <div>
      <div
        className="modalBackground"
        onClick={setIsOpenModalFinal.bind(this, false)}
      >
        <div className="modalContentPlay" onClick={(e) => e.stopPropagation()}>
          <header className="modalHeader">
            <div
              className="closeZone"
              onClick={setIsOpenModalFinal.bind(this, false)}
            >
              <AiIcons.AiOutlineCloseCircle />
            </div>
          </header>
          <div className="modalBodyPlay">
            <ReactPlayer
              url="https://youtu.be/DXaq_hQkQN8?si=chcI2f_TVKAKbnQ1"
              width="80%"
              height="300px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
