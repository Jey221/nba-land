/* import { useEffect, useState } from 'react';
import { getDataTeams } from '../data/datas';
 */
export default function ModalTeam({ setIsOpenModal, selectedTeam }) {
  console.log('selectedTeam', selectedTeam);
  console.log('selectedTeam', selectedTeam.name);

  return (
    <div className="modalBackground">
      <div className="modalContent">
        <div className="modalHeader"></div>
        <div className="modalBody"></div>
      </div>
    </div>
  );
}
