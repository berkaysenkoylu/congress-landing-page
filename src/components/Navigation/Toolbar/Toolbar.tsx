import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './Toolbar.module.scss';
import IconButton from '../../UI/IconButton/IconButton';

const Toolbar = () => {
    const { i18n, t } = useTranslation();

    const iconImage = require('../../../assets/images/logo.png');

    const onLanguageChange = (name: string) => {
        i18n.changeLanguage(name);
    }

    return (
        <div className={classes.Toolbar}>
            <img src={iconImage} alt="logo" />
            <h2 className={classes.Toolbar__Title}>{t('Title')}</h2>

            <ul className={classes.Toolbar__Lang}>
                <IconButton iconName='tr' clicked={onLanguageChange} />
                <IconButton iconName='en' clicked={onLanguageChange} />
            </ul>
        </div>
    );
}

export default Toolbar;