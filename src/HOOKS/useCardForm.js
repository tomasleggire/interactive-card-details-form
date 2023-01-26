import {useState} from 'react';
import bgDesktop from '../IMAGES/bg-main-desktop.png';
import bgMobile from '../IMAGES/bg-main-mobile.png';
import bgCardFront from '../IMAGES/bg-card-front.png';
import bgCardBack from '../IMAGES/bg-card-back.png';

import cardLogo from '../IMAGES/card-logo.svg';
import completeLogo from '../IMAGES/icon-complete.svg';

export default function useCardForm() {

    const images = {
        bgDesktop: bgDesktop,
        bgMobile: bgMobile,
        bgCardFront: bgCardFront,
        bgCardBack: bgCardBack,
        cardLogo: cardLogo,
        completeLogo: completeLogo
    }

    const [state, setState] = useState({
        cardNumber: '0000000000000000',
        cardName: 'JANE APPLESEED',
        expiration: ['00', '00'],
        cardCode: '000',
    })

    const sumbitForm = (e, newState) => {
        e.preventDefault();
        if (newState.cardName.length < 5) {
            console.log('cardName no puede contener menos de 5 caracteres');
            return;
        } else if (/^[0-9]*(\.?)[ 0-9]+$/.test(newState.cardName)) {
            console.log('cardName no puede contener numeros');
            return;
        } else if (newState.cardNumber.length < 16){
            console.log('cardNumber no puede tener menos de 16 numeros');
            return;
        } else if (!/^[0-9]*(\.?)[ 0-9]+$/.test(newState.cardNumber)){
            console.log('cardNumber no puede contener letras');
            return;
        } else if (!newState.expiration[0] || !newState.expiration[1]) {
            console.log('exp. Date no puede estar en blanco');
        } else if (!newState.cardCode) {
            console.log('Cvc no puede estar en blanco');
            return;
        } else {
            console.log(newState);
            setState(newState);
            setCompleteValue(true);
        };
    }

    const [completeValue, setCompleteValue] = useState(false);

    return [images, state, setState, sumbitForm, completeValue,];
}

