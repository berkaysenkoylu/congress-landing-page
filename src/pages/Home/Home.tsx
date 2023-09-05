import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './Home.module.scss';
import ImageShowcase from '../../components/ImageShowcase/ImageShowcase';
import Clock from '../../components/Clock/Clock';

const Home = () => {
    const { t } = useTranslation();

    const chickenImage = require('../../assets/images/happy_cows.png');

    return (
        <div className={classes.Home}>
            <ImageShowcase
                imageUrl={chickenImage}
                alt='showcase_image'
                overlayTitle={t('Home.OverlayTitle')}
                overlaySubTitle={t('Home.OverlaySubTitle')}
                isOverlayed
                overlayTextPosition='Top'
            />

            <Clock />
        </div>
    )
}

export default Home