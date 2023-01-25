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
        cardNumber: '0000 0000 0000 0000',
        cardName: 'JANE APPLESEED',
        expiration: '00/00',
        cardCode: '000',
    })

    return [images, state, setState];
}
