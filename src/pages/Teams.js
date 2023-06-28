import React from 'react';
import Header from '../components/Header/Header';
import GalleryTeams from '../components/GalleryTeams';

export default function Teams() {
  return (
    <div>
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
