import React, {useState} from "react";
import '../CSS/Form.css';

export default function Form({setCompleteValue, sumbitForm}) {

    const [newState, setNewState] = useState({
        cardNumber: '0000 0000 0000 0000',
        cardName: 'JANE APPLESEED',
        expiration: ['00', '00'],
        cardCode: '000',
    })

    return (
        <form className="main-form" onSubmit={(e)=>sumbitForm(e, newState)}>
            <label className="name-label">CARDHOLDER NAME</label>
            <input type='text' placeholder="e.g. Jane Appleseed" className="name-input" maxLength='25' onChange={(e)=>setNewState({
                cardNumber: newState.cardNumber,
                cardName: e.target.value,
                expiration: newState.expiration,
                cardCode: newState.cardCode,
            })}/>
            <label className="number-label">CARD NUMBER</label>
            <input type='text' placeholder="e.g. 1234 5678 9123 0000" className="number-input" maxLength='16' onChange={(e)=>setNewState({
                cardNumber: e.target.value,
                cardName: newState.cardName,
                expiration: newState.expiration,
                cardCode: newState.cardCode,
            })}/>
            <div className="last-info-main">
                <div className="exp-date">
                    <label className="exp-label">{`EXP. DATE (MM/YY)`}</label>
                    <div className="date-inputs">
                        <input type='number' className="input-date-mm" placeholder="MM" onInput={(e) => e.target.value = e.target.value.slice(0, 2)} min='1' max='12' onChange={(e)=>setNewState({
                            cardNumber: newState.cardNumber,
                            cardName: newState.cardName,
                            expiration: [e.target.value, newState.expiration[1]],
                            cardCode: newState.cardCode,
                        })}/>
                        <input type='number' className="input-date-yy" placeholder="YY" onInput={(e) => e.target.value = e.target.value.slice(0, 2)} min='22' onChange={(e)=>setNewState({
                            cardNumber: newState.cardNumber,
                            cardName: newState.cardName,
                            expiration: [newState.expiration[0], e.target.value],
                            cardCode: newState.cardCode,
                        })}/>
                    </div>
                </div>
                <div className="cvc-input-main">
                    <label className="cvc-label">CVC</label>
                    <input type='number' className="input-cvc" placeholder="e.g. 123" onInput={(e) => e.target.value = e.target.value.slice(0, 3)} min='0' onChange={(e)=>setNewState({
                        cardNumber: newState.cardNumber,
                        cardName: newState.cardName,
                        expiration: newState.expiration,
                        cardCode: e.target.value,
                    })}/>
                </div>
            </div>
            <button type="sumbit" className="confirm">Confirm</button>
        </form>
    )
}