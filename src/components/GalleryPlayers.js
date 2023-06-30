import { useEffect, useRef, useState } from 'react';
import { getDataPlayers } from '../data/datas';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../css/components/GalleryPlayers.css';
import * as GiIcons from 'react-icons/gi';
import * as AiIcons from 'react-icons/ai';
import ModalPlayer from './ModalPlayer';

export default function GalleryPlayers() {
  const [dataPlayer, setDataPlayer] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchField, setSearchField] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const searchPagination = (e) => {
    setCurrentPage(e.target.value);
  };
  const searchPlayer = (e) => {
    setSearchField(e.target.value);
  };

  useEffect(() => {
    async function playersLoad() {
      const datas = await getDataPlayers(currentPage, searchField);
      setDataPlayer(datas);
    }
    playersLoad();
  }, [currentPage, searchField]);

  const handleClick = (e, player) => {
    setIsOpenModal(true);
    setSelectedPlayer(player);
  };
  const inputRef = useRef(null);
  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
      setSearchField('');
    }
  };

  return (
    <>
      <div className="searchZonePlayer">
        <label htmlFor="search">Search for a specific player : </label>
        <input
          id="search"
          className="searchInput"
          onChange={searchPlayer}
          style={{ color: 'black' }}
          ref={inputRef}
          type="text"
        ></input>
        <AiIcons.AiOutlineCloseCircle
          onClick={clearInput}
          style={{ fontSize: '26px' }}
        />
      </div>
      <div className="GalleryPlayers">
        {dataPlayer.map((player) => {
          return (
            <motion.div
              initial={{ x: 25, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1,
              }}
              className="player"
              key={player.id}
            >
              <div className="playerCard">
                <Link onClick={(e) => handleClick(e, player)}>
                  <GiIcons.GiBasketballJersey />
                  <span className="namePlayer">
                    {player.first_name} {player.last_name}
                  </span>
                </Link>
              </div>
            </motion.div>
          );
        })}
        {isOpenModal && (
          <ModalPlayer
            setIsOpenModal={setIsOpenModal}
            selectedPlayer={selectedPlayer}
          />
        )}
      </div>
      <div className="paginationZone">
        <label htmlFor="pagination">Pages : </label>
        <input
          id="pagination"
          className="paginationInput"
          onChange={searchPagination}
          style={{ color: 'black' }}
          type="number"
          min={1}
        ></input>
      </div>
    </>
  );
}
