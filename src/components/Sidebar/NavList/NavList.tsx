import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './NavList.module.scss';
import NavigationItem from '../NavigationItem/NavigationItem';

const NavList = (props: any) => {
    const { t } = useTranslation();

    let navList = (
        <>
            <NavigationItem
                pageName='Home'
                label={t("Navigation.Home")}
            />
            <NavigationItem
                pageName='Invitation'
                label={t("Navigation.Invitation")}
            />
            <NavigationItem
                pageName='Committees'
                label={t("Navigation.Committees")}
            />
            <NavigationItem
                pageName='Program'
                label={t("Navigation.Program")}
            />
            <NavigationItem
                pageName='InvitedSpeakers'
                label={t("Navigation.InvitedSpeakers")}
            />
            <NavigationItem
                pageName='Paper'
                label={t("Navigation.Paper")}
            />
            <NavigationItem
                pageName='CongressRegistration'
                label={t("Navigation.CongressRegistration")}
            />
            <NavigationItem
                pageName='Accomodation'
                label={t("Navigation.Accomodation")}
            />
            <NavigationItem
                pageName='Sponsorship'
                label={t("Navigation.Sponsorship")}
            />
            <NavigationItem
                pageName='Sponsors'
                label={t("Navigation.Sponsors")}
            />
            <NavigationItem
                pageName='Contact'
                label={t("Navigation.Contact")}
            />
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