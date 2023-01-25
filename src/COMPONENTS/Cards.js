import React from "react";
import '../CSS/Cards.css';

export default function Cards({images, state}) {
    return (
        <div className="cards-main">
          <div className="card card-front" style={{ backgroundImage: `url(${images.bgCardFront})` }}>
            <div className="card-logo-container">
              <img src={images.cardLogo} alt='Card Logo'/>
            </div>
            <p className="p-front">{state.cardNumber}</p>
            <div className="info-front">
                <h6 className="name-front">{state.cardName}</h6>
                <span className="span-front">{state.expiration}</span>
            </div>
          </div>

          <div className="card card-back" style={{ backgroundImage: `url(${images.bgCardBack})` }}>
            <span className="span-back">{state.cardCode}</span>
          </div>
        </div>
    )
}