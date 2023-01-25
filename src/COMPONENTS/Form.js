import React from "react";
import '../CSS/Form.css';

export default function Form({setState, setCompleteValue}) {

    return (
        <form className="main-form">
            <label className="name-label">CARDHOLDER NAME</label>
            <input type='text' placeholder="e.g. Jane Appleseed" className="name-input" maxLength='25'/>
            <label className="number-label">CARD NUMBER</label>
            <input type='text' placeholder="e.g. 1234 5678 9123 0000" className="number-input" maxLength='16'/>
            <div className="last-info-main">
                <div className="exp-date">
                    <label className="exp-label">{`EXP. DATE (MM/YY)`}</label>
                    <div className="date-inputs">
                        <input type='number' className="input-date-mm" placeholder="MM" onInput={(e) => e.target.value = e.target.value.slice(0, 2)} min='1' max='12'/>
                        <input type='number' className="input-date-yy" placeholder="YY" onInput={(e) => e.target.value = e.target.value.slice(0, 2)} min='22'/>
                    </div>
                </div>
                <div className="cvc-input-main">
                    <label className="cvc-label">CVC</label>
                    <input type='number' className="input-cvc" placeholder="e.g. 123" onInput={(e) => e.target.value = e.target.value.slice(0, 3)} min='0'/>
                </div>
            </div>
            <button type="sumbit" className="confirm" onClick={()=>setCompleteValue(true)}>Confirm</button>
        </form>
    )
}