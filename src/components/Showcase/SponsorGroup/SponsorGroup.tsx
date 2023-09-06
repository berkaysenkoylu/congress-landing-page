import React from 'react';

import classes from './SponsorGroup.module.scss';
import SponsorCard from '../../SponsorCard/SponsorCard';

const SponsorGroup = () => {

    const sponsor1 = require('../../../assets/images/LOGOS/Cargill logo.jpg');
    const sponsor2 = require('../../../assets/images/LOGOS/dsm.png');
    const sponsor3 = require('../../../assets/images/LOGOS/Elanco_logo.png');
    const sponsor4 = require('../../../assets/images/LOGOS/huvepharma.jpg');
    const sponsor5 = require('../../../assets/images/LOGOS/phibro_logo.png');
    const sponsor6 = require('../../../assets/images/LOGOS/DSA-7x7-değişmiş-son-hali.jpg');

    return (
        <div className={classes.SponsorGroup}>
            <SponsorCard imageUrl={sponsor1} imageAlt='sponsor1' />

            <SponsorCard imageUrl={sponsor2} imageAlt='sponsor2' />

            <SponsorCard imageUrl={sponsor3} imageAlt='sponsor3' />

            <SponsorCard imageUrl={sponsor4} imageAlt='sponsor4' />

            <SponsorCard imageUrl={sponsor5} imageAlt='sponsor5' />

            <SponsorCard imageUrl={sponsor6} imageAlt='sponsor6' />

            {/* CLONES */}
            {/* <SponsorCard imageUrl={sponsor1} imageAlt='sponsor1-clone' isFirstClone boundingRectOfContainer={props.containerBounds} />

            <SponsorCard imageUrl={sponsor2} imageAlt='sponsor2-clone' />

            <SponsorCard imageUrl={sponsor3} imageAlt='sponsor3-clone' /> */}
        </div>
    )
}

export default SponsorGroup;