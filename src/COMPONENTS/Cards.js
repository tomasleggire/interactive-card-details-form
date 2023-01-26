import React from "react";
import '../CSS/Cards.css';

export default function Cards({images, state}) {
    return (
        <div className="cards-main">
          <div className="card card-front" style={{ backgroundImage: `url(${images.bgCardFront})` }}>
            <div className="card-logo-container">
              <img src={images.cardLogo} alt='Card Logo'/>
            </div>
            <p className="p-front">{
              state.cardNumber[0] +
              state.cardNumber[1] +
              state.cardNumber[2] +
              state.cardNumber[3] + ' ' +
              state.cardNumber[4] +
              state.cardNumber[5] +
              state.cardNumber[6] +
              state.cardNumber[7] + ' ' +
              state.cardNumber[8] +
              state.cardNumber[9] +
              state.cardNumber[10] +
              state.cardNumber[11] + ' ' +
              state.cardNumber[12] +
              state.cardNumber[13] +
              state.cardNumber[14] +
              state.cardNumber[15] 
            }</p>
            <div className="info-front">
                <h6 className="name-front">{state.cardName}</h6>
                <span className="span-front">{`${state.expiration[0]}/${state.expiration[1]}`}</span>
            </div>
          </div>

          <div className="card card-back" style={{ backgroundImage: `url(${images.bgCardBack})` }}>
            <span className="span-back">{state.cardCode}</span>
          </div>
        </div>
    )
}