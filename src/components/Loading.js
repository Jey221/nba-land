import React from 'react';
import '../css/components/Loading.css';

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
