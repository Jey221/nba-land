import React from 'react';
import * as AiIcons from 'react-icons/ai';
import ReactPlayer from 'react-player';
import '../css/components/ModalPlay.css';
export default function ModalPlay({ setIsOpenModalFinal, url }) {
  return (
    <div>
      <div
        className="modalBackgroundPlay"
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
            <ReactPlayer url={url} width="80%" height="300px" />
          </div>
        </div>
      </div>
    </div>
  );
}
