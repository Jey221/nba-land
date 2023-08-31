import React from 'react';
import * as AiIcons from 'react-icons/ai';
import '../css/components/ModalDropdown.css';

export default function ModalDropdown({ setIsOpenModal, target }) {
  return (
    <div className="modalBackground" onClick={setIsOpenModal.bind(this, false)}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <header className="modalHeader">
          <div className="closeZone" onClick={setIsOpenModal.bind(this, false)}>
            <AiIcons.AiOutlineCloseCircle />
          </div>
        </header>
        <div className="modalBodyAwards">
          <img src={target} alt="all team" />
        </div>
      </div>
    </div>
  );
}
