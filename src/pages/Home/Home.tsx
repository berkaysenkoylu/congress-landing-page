import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './Home.module.scss';
import ImageShowcase from '../../components/ImageShowcase/ImageShowcase';
import Clock from '../../components/Clock/Clock';
import Showcase from '../../components/Showcase/Showcase';
import Notice from '../../components/Notice/Notice';

const Home = () => {
    const { t } = useTranslation();

    const homeImage = require('../../assets/images/saman_balya.png');

    return (
        <div className={classes.Home}>
            <ImageShowcase
                imageUrl={homeImage}
                alt='showcase_image'
                overlayTitle={t('Home.OverlayTitle')}
                overlaySubTitle={t('Home.OverlaySubTitle')}
                isOverlayed
                overlayTextPosition='Top'
            />

            <Notice />

            <Clock />

            <Showcase />
        </div>
    )
}

export default Home