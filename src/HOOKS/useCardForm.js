import {useState} from 'react';
import bgDesktop from '../IMAGES/bg-main-desktop.png';
import bgMobile from '../IMAGES/bg-main-mobile.png';
import bgCardFront from '../IMAGES/bg-card-front.png';
import bgCardBack from '../IMAGES/bg-card-back.png';

import cardLogo from '../IMAGES/card-logo.svg';
import completeLogo from '../IMAGES/icon-complete.svg';

export default function useCardForm() {
    
    const [completeValue, setCompleteValue] = useState(false);

    const [error, setError] = useState(['','']);

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
        setError(['','']);
        if (newState.cardName.length < 5) {
            setError(['cardName', 'type1']);
            return;
        } else if (!/^[A-Za-z ]+$/.test(newState.cardName)) {
            setError(['cardName', 'type2']);
            return;
        } else if (newState.cardNumber.length < 16){
            setError(['cardNumber', 'type1']);
            return;
        } else if (!/^[0-9]*(\.?)[ 0-9]+$/.test(newState.cardNumber)){
            setError(['cardNumber', 'type2']);
            return;
        } else if (!newState.expiration[0] || !newState.expiration[1]) {
            setError(['expiration', 'type1']);
            return;
        } else if (!newState.cardCode) {
            setError(['cvc', 'type1']);
            return;
        } else {
            console.log(newState);
            setState(newState);
            setCompleteValue(true);
        };
    }


    return [images, state, sumbitForm, completeValue, error];
}

