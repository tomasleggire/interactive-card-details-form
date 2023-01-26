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
        if (!/^[0-9]*(\.?)[ 0-9]+$/.test(newState.cardNumber) && newState.cardNumber.length < 16) {
            console.log('cardNumber no puede contener letras ni tener menos de 16 numeros');
            return;
        } else if (/^[0-9]*(\.?)[ 0-9]+$/.test(newState.cardName && newState.cardName.length < 5)) {
            console.log('cardName no puede contener numeros ni tener menos de 5 caracteres')
        } else {
            console.log(newState);
            setState(newState);
            setCompleteValue(true);
        };
    }

    const [completeValue, setCompleteValue] = useState(false);

    return [images, state, setState, sumbitForm, completeValue,];
}
