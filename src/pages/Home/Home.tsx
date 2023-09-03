import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './Home.module.scss';
import ImageShowcase from '../../components/ImageShowcase/ImageShowcase';
import Clock from '../../components/Clock/Clock';

const Home = () => {
    const { t } = useTranslation();

    const chickenImage = require('../../assets/images/chickens.jpg');

    return (
        <div className={classes.Home}>
            <ImageShowcase
                imageUrl={chickenImage}
                alt='showcase_image'
                overlayTitle={t('Home.OverlayTitle')}
                overlaySubTitle={t('Home.OverlaySubTitle')}
                isOverlayed
            />

            {/* <Clock /> */}
        </div>
    )
}

export default Home