import React from 'react';

import classes from './PersonCard.module.scss';

interface PersonCardPropsType {
    name: string
    customStyle?: React.CSSProperties
    imageUrl?: string
    statusText?: string
}

const PersonCard = (props: PersonCardPropsType) => {
    const { name, statusText, customStyle } = props;
    const defaultImage = require('../../../assets/images/avatar-default.png');

    return (
        <div className={classes.PersonCard} style={customStyle}>
            <figure>
                <img alt={name} src={defaultImage} />
                <figcaption>
                    <p>{name}</p>
                    {statusText ? <p>{statusText}</p> : null}
                </figcaption>
            </figure>
        </div>
    );
}

export default PersonCard;