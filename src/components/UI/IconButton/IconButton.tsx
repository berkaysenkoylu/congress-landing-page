import React from 'react';

import turkeyLogo from '../../../assets/images/turkey.png';
import usaLogo from '../../../assets/images/united-states.png';
import classes from './IconButton.module.scss';


interface IconButtonPropsType {
    iconName: 'tr' | 'en'
    clicked: (iconName: string) => void
}

const IconButton = (props: IconButtonPropsType) => {
    const { iconName, clicked } = props;

    return (
        <button className={classes.IconButton} onClick={() => clicked(iconName)}>
            <img src={iconName === 'tr' ? turkeyLogo : usaLogo} alt={`${iconName}-logo`} />
        </button>
    )
}

export default IconButton;