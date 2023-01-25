import React from "react";
import '../CSS/Complete.css';

export default function Complete({images}) {
    return (
        <div className="complete-main">
            <div className="complete-logo">
              <img src={images.completeLogo} />
            </div>
            <h1 className="h1-complete">THANK YOU!</h1>
            <p className="p-complete">We've added your card details.</p>
            <button type="button" onClick={() => window.location.reload()} className='btn-complete'>Continue</button>
        </div>
    )
}