import React from 'react';
import bgDesktop from '../IMAGES/bg-main-desktop.png';
import bgMobile from '../IMAGES/bg-main-mobile.png';
import bgCardFront from '../IMAGES/bg-card-front.png';
import bgCardBack from '../IMAGES/bg-card-back.png';

import cardLogo from '../IMAGES/card-logo.svg';

export default function useCardForm() {

    const images = {
        bgDesktop: bgDesktop,
        bgMobile: bgMobile,
        bgCardFront: bgCardFront,
        bgCardBack: bgCardBack,
        cardLogo: cardLogo,
    }

    return [images];
}
