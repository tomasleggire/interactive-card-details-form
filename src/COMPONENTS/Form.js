import React, {useState} from "react";
import '../CSS/Form.css';

export default function Form({sumbitForm, error}) {

    const [newState, setNewState] = useState({
        cardNumber: '',
        cardName: '',
        expiration: ['', ''],
        cardCode: '',
    })

    return (
        <form className="main-form" onSubmit={(e)=>sumbitForm(e, newState)}>
            <label className="name-label">CARDHOLDER NAME</label>
            <input type='text' placeholder="e.g. Jane Appleseed" className={`name-input ${error[0] === 'cardName' && 'error-border'}`} maxLength='25' onChange={(e)=>setNewState({
                cardNumber: newState.cardNumber,
                cardName: e.target.value,
                expiration: newState.expiration,
                cardCode: newState.cardCode,
            })}/>
            {error[0] === 'cardName' && error[1] === 'type1' ? <p className="error">Must have at least 5 characters</p> : ''}
            {error[0] === 'cardName' && error[1] === 'type2' ? <p className="error">Wrong format, letters only</p> : ''}
            <label className="number-label">CARD NUMBER</label>
            <input type='text' placeholder="e.g. 1234 5678 9123 0000" className={`number-input ${error[0] === 'cardNumber' && 'error-border'}`} maxLength='16' onChange={(e)=>setNewState({
                cardNumber: e.target.value,
                cardName: newState.cardName,
                expiration: newState.expiration,
                cardCode: newState.cardCode,
            })}/>
            {error[0] === 'cardNumber' && error[1] === 'type1' ? <p className="error">Must have 16 characters</p> : ''}
            {error[0] === 'cardNumber' && error[1] === 'type2' ? <p className="error">Wrong format, numbers only</p> : ''}
            <div className="last-info-main">
                <div className="exp-date">
                    <label className="exp-label">{`EXP. DATE (MM/YY)`}</label>
                    <div className="date-inputs">
                        <input type='number' className={`input-date-mm ${error[0] === 'expiration' && 'error-border'}`} placeholder="MM" onInput={(e) => e.target.value = e.target.value.slice(0, 2)} min='1' max='12' onChange={(e)=>setNewState({
                            cardNumber: newState.cardNumber,
                            cardName: newState.cardName,
                            expiration: [e.target.value, newState.expiration[1]],
                            cardCode: newState.cardCode,
                        })}/>
                        <input type='number' className={`input-date-yy ${error[0] === 'expiration' && 'error-border'}`} placeholder="YY" onInput={(e) => e.target.value = e.target.value.slice(0, 2)} min='22' onChange={(e)=>setNewState({
                            cardNumber: newState.cardNumber,
                            cardName: newState.cardName,
                            expiration: [newState.expiration[0], e.target.value],
                            cardCode: newState.cardCode,
                        })}/>
                    </div>
                    {error[0] === 'expiration' && error[1] === 'type1' ? <p className="error">Cann't be blank</p> : ''}
                </div>
                <div className="cvc-input-main">
                    <label className="cvc-label">CVC</label>
                    <input type='number' className={`input-cvc ${error[0] === 'cvc' && 'error-border'}`} placeholder="e.g. 123" onInput={(e) => e.target.value = e.target.value.slice(0, 3)} min='0' onChange={(e)=>setNewState({
                        cardNumber: newState.cardNumber,
                        cardName: newState.cardName,
                        expiration: newState.expiration,
                        cardCode: e.target.value,
                    })}/>
                    {error[0] === 'cvc' && error[1] === 'type1' ? <p className="error">Cann't be blank</p> : ''}
                </div>
            </div>
            <button type="sumbit" className="confirm">Confirm</button>
        </form>
    )
}