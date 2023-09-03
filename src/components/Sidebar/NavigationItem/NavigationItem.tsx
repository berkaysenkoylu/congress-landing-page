import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.module.scss';

const NavigationItem = (props: any) => {
    return (
        <NavLink
            to={props.to}
            className={({ isActive }) => isActive ?
                [classes.NavigationItem, classes.NavigationItem__Active].join(' ') : classes.NavigationItem}>{props.label}</NavLink>
    )
}

export default NavigationItem;