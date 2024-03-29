import React, { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

import classes from './SponsorGroup.module.scss';
import SponsorCard from '../../SponsorCard/SponsorCard';

const SponsorGroup = forwardRef((props: any, ref: any) => {
    const { i18n } = useTranslation();

    const tekafosLogo = require('../../../assets/images/LOGOS/tekafos.png');
    const tryembirLogo = require('../../../assets/images/LOGOS/tryembirLogo.png');
    const cargillLogo = require('../../../assets/images/LOGOS/Cargill logo.jpg');
    const dsmLogo = require('../../../assets/images/LOGOS/dsm.png');
    const adisseoLogo = require('../../../assets/images/LOGOS/adisseo.png');
    const elancoLogo = require('../../../assets/images/LOGOS/Elanco_logo.png');
    const makrovitLogo = require('../../../assets/images/LOGOS/makrovit.png');
    const mekoLogo = require('../../../assets/images/LOGOS/meko.png');
    const ewNutritionLogo = require('../../../assets/images/LOGOS/ew_nutrition_logo.png');
    const abpLogo = require('../../../assets/images/LOGOS/abp_logo.png');
    const brtLogo = require('../../../assets/images/LOGOS/brt_logo.png');
    const huvepharmaLogo = require('../../../assets/images/LOGOS/huvepharma.jpg');
    const alltechLogo = require('../../../assets/images/LOGOS/alltech.png');
    const phibroLogo = require('../../../assets/images/LOGOS/phibro_logo.png');
    const dsaLogo = require('../../../assets/images/LOGOS/DSA-7x7-değişmiş-son-hali.jpg');
    const rumenpaLogo = require('../../../assets/images/LOGOS/rumenpa_logo.png');
    const yunikoLogo = require('../../../assets/images/LOGOS/yuniko_logo.png');
    const parsanalitikLogo = require('../../../assets/images/LOGOS/parsanalitik_logo.png');
    const doaNutritionLogo = require('../../../assets/images/LOGOS/doa_nutrition_logo.png');
    const kartalTrLogo = require('../../../assets/images/LOGOS/kartal_tr_logo.png');
    const kartalEnLogo = require('../../../assets/images/LOGOS/kartal_en_logo.png');

    return (
        <div className={classes.SponsorGroup} ref={ref}>
            <SponsorCard imageUrl={tekafosLogo} imageAlt='tekafosLogo' />

            <SponsorCard imageUrl={tryembirLogo} imageAlt='tryembirLogo' />

            <SponsorCard imageUrl={yunikoLogo} imageAlt='yunikoLogo' />

            <SponsorCard imageUrl={cargillLogo} imageAlt='cargillLogo' />

            <SponsorCard imageUrl={dsmLogo} imageAlt='dsmLogo' />

            <SponsorCard imageUrl={adisseoLogo} imageAlt='adisseoLogo' />

            <SponsorCard imageUrl={elancoLogo} imageAlt='elancoLogo' />

            <SponsorCard imageUrl={makrovitLogo} imageAlt='makrovitLogo' />

            <SponsorCard imageUrl={i18n.language === 'tr' ? kartalTrLogo : kartalEnLogo} imageAlt='kartalLogo' />

            <SponsorCard imageUrl={parsanalitikLogo} imageAlt='parsanalitikLogo' />

            <SponsorCard imageUrl={mekoLogo} imageAlt='mekoLogo' />

            <SponsorCard imageUrl={ewNutritionLogo} imageAlt='ewNutritionLogo' />

            <SponsorCard imageUrl={abpLogo} imageAlt='abpLogo' />

            <SponsorCard imageUrl={brtLogo} imageAlt='brtLogo' />

            <SponsorCard imageUrl={huvepharmaLogo} imageAlt='huvepharmaLogo' />

            <SponsorCard imageUrl={alltechLogo} imageAlt='alltechLogo' />

            <SponsorCard imageUrl={phibroLogo} imageAlt='phibroLogo' />

            <SponsorCard imageUrl={dsaLogo} imageAlt='dsaLogo' />

            <SponsorCard imageUrl={rumenpaLogo} imageAlt='rumenpaLogo' />

            <SponsorCard imageUrl={doaNutritionLogo} imageAlt='doaNutritionLogo' />
        </div>
    )
})

export default SponsorGroup;