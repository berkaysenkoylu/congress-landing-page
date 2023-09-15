import React, { forwardRef } from 'react';

import classes from './SponsorGroup.module.scss';
import SponsorCard from '../../SponsorCard/SponsorCard';

const SponsorGroup = forwardRef((props: any, ref: any) => {

    const cargillLogo = require('../../../assets/images/LOGOS/Cargill logo.jpg');
    const dsmLogo = require('../../../assets/images/LOGOS/dsm.png');
    const adisseoLogo = require('../../../assets/images/LOGOS/adisseo.png');
    const elancoLogo = require('../../../assets/images/LOGOS/Elanco_logo.png');
    const makrovitLogo = require('../../../assets/images/LOGOS/makrovit.png');
    const mekoLogo = require('../../../assets/images/LOGOS/meko.png');
    const huvepharmaLogo = require('../../../assets/images/LOGOS/huvepharma.jpg');
    const alltechLogo = require('../../../assets/images/LOGOS/alltech.png');
    const phibroLogo = require('../../../assets/images/LOGOS/phibro_logo.png');
    const dsaLogo = require('../../../assets/images/LOGOS/DSA-7x7-değişmiş-son-hali.jpg');

    return (
        <div className={classes.SponsorGroup} ref={ref}>
            <SponsorCard imageUrl={cargillLogo} imageAlt='cargillLogo' />

            <SponsorCard imageUrl={dsmLogo} imageAlt='dsmLogo' />

            <SponsorCard imageUrl={adisseoLogo} imageAlt='adisseoLogo' />

            <SponsorCard imageUrl={elancoLogo} imageAlt='elancoLogo' />

            <SponsorCard imageUrl={makrovitLogo} imageAlt='makrovitLogo' />

            <SponsorCard imageUrl={mekoLogo} imageAlt='mekoLogo' />

            <SponsorCard imageUrl={huvepharmaLogo} imageAlt='huvepharmaLogo' />

            <SponsorCard imageUrl={alltechLogo} imageAlt='alltechLogo' />

            <SponsorCard imageUrl={phibroLogo} imageAlt='phibroLogo' />

            <SponsorCard imageUrl={dsaLogo} imageAlt='dsaLogo' />
        </div>
    )
})

export default SponsorGroup;