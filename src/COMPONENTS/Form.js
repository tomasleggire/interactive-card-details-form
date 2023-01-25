import React from "react";
import '../CSS/Form.css';

export default function Form({setState}) {
    return (
        <form className="main-form">
            <label className="name-label">CARDHOLDER NAME</label>
            <input type='text' placeholder="e.g. Jane Appleseed" className="name-input"/>
            <label className="number-label">CARD NUMBER</label>
            <input type='text' placeholder="e.g. 1234 5678 9123 0000" className="number-input" maxLength='16'/>
            <div className="last-info-main">
                <div className="exp-date">
                    <label className="exp-label">{`EXP. DATE (MM/YY)`}</label>
                    <div className="date-inputs">
                        <input type='text' className="input-date-mm" placeholder="MM" pattern="\d*" maxlength="2"/>
                        <input type='text' className="input-date-yy" placeholder="YY" pattern="\d*" maxlength="2"/>
                    </div>
                </div>
            </div>
        </form>
    )
}