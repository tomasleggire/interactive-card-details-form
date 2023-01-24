import React from "react";
import '../CSS/Cards.css';

export default function Cards({images}) {
    return (
        <div className="cards-main">
          <div className="card card-front" style={{ backgroundImage: `url(${images.bgCardFront})` }}>

          </div>
          <div className="card card-back" style={{ backgroundImage: `url(${images.bgCardBack})` }}>
            
          </div>
        </div>
    )
}