import React from 'react';
import '../css/components/Loading.css';

/* MISE EN PLACE DU CHARGEMENT AU LANCEMENT DES PAGES */

export default function Loading() {
  return (
    <div className="backLoad">
      <div className="zoneLoad">
        <div className="ball"></div>
      </div>
      <div className="shadow"></div>
    </div>
  );
}
