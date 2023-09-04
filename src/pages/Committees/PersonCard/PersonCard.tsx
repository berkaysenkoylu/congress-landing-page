import React from 'react';

import classes from './PersonCard.module.scss';

interface PersonCardPropsType {
    name: string
    imageUrl?: string
    statusText?: string
}

const PersonCard = (props: PersonCardPropsType) => {
    const { name, statusText } = props;
    const defaultImage = require('../../../assets/images/avatar-default.png');

    return (
        <div className={classes.PersonCard}>
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