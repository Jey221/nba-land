import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import '../css/pages/Error.css';

export default function Error() {
  return (
    <div>
      <Header />
      <div className="errorContain">
        <div className="imageError">
          <span className="error404">404</span>
        </div>
        <p className="messageError">Error, not found page...</p>
      </div>
      <Footer />
    </div>
  );
}
