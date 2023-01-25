import React from "react";
import '../CSS/Form.css';

export default function Form({setState}) {
    return (
        <form className="main-form">
            <label className="name-label">CARDHOLDER NAME</label>
            <input type='text' placeholder="e.g. Jane Appleseed" className="name-input"/>
            <label className="number-label">CARD NUMBER</label>
            <input type='text' placeholder="e.g. 1234 5678 9123 0000" className="number-input"/>
        </form>
    )
}