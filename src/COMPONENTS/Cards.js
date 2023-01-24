import React from "react";
import '../CSS/Cards.css';

export default function Cards({images}) {
    return (
        <div className="cards-main">
          <div className="card card-front" style={{ backgroundImage: `url(${images.bgCardFront})` }}>
            <div className="card-logo-container">
              <img src={images.cardLogo}/>
            </div>
            <p className="p-front">0000 0000 0000 0000</p>
            <div className="info-front">
                <h6 className="name-front">JANE APPLESEED</h6>
                <span className="span-front">00/00</span>
            </div>
          </div>

          <div className="card card-back" style={{ backgroundImage: `url(${images.bgCardBack})` }}>
            <span className="span-back">000</span>
          </div>
        </div>
    )
}