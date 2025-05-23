import React, { useState } from 'react';
import './Mainlayout.css'; 
import jo1 from '../assets/jo1.jpg'
import jo2 from '../assets/jo2.jpg'
import jo11 from '../assets/jo11.jpg'

export default function HomePage() {
  const [visibleBox, setVisibleBox] = useState(null);

  const messages = {
    1: "You yourself, as much as anybody in the entire universe, deserve your love and affection. — Buddha",
    2: "Owning our story and loving ourselves through that process is the bravest thing we’ll ever do. — Brené Brown",
    3: "Don't chase people. Be yourself, do your own thing, and work hard. The right people—the ones who really belong in your life—will come to you.— Will Smith,"
  };
  const handleSeeMore = (id) => {
    setVisibleBox(id);
  };

  const handleClose = () => {
    setVisibleBox(null);
  };

  return (
    <div className="homepage-container">
      <h2 className="main-title">
        Hi im quilJo! Welcome!
      </h2>

      <div className="card-grid">
        {/* Card 1 */}
        <div className="card">
          <img
            src ={jo1}
            alt="Box 1"
            className="card-image"
          />
          <button className="see-more" onClick={() => handleSeeMore(1)}>Open</button>
        </div>

        {/* Card 2 */}
        <div className="card">
          <img
            src={jo2}
            alt="Box 2"
            className="card-image"
          />
          <button className="see-more" onClick={() => handleSeeMore(2)}>Open</button>
        </div>

        {/* Card 3 */}
        <div className="card">
          <img
            src={jo11}
            alt="Box 3"
            className="card-image"
          />
          <button className="see-more" onClick={() => handleSeeMore(3)}>Open</button>
        </div>
      </div>

      {visibleBox && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleClose}>&times;</button>
            <p>{messages[visibleBox]}</p>
          </div>
        </div>
      )}
    </div>
  );
}