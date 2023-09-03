import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './NavList.module.scss';
import NavigationItem from '../NavigationItem/NavigationItem';

const NavList = () => {
    const { t } = useTranslation();

    let navList = (
        <>
            <NavigationItem exact to="/" label={t("Navigation.Home")} />
            <NavigationItem exact to="/davet" label={t("Navigation.Invitation")} />
            <NavigationItem exact to="/bildiri" label={t("Navigation.Abstract")} />
        </>
    );

    return (
        <nav className={classes.Navigation}>
            <ul className={classes.Navigation__Items}>
                {navList}
            </ul>
        </nav>
    )
}

export default NavList;