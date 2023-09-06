import React, { useRef } from 'react';

import classes from './SponsorCard.module.scss';

interface SponsorCardPropsType {
    imageUrl: string
    imageAlt: string

}

const SponsorCard = (props: SponsorCardPropsType) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const { imageAlt, imageUrl } = props;

    return (
        <div className={classes.SponsorCard} ref={cardRef} id={`${imageAlt}`}>
            <img alt={imageAlt} src={imageUrl} />
        </div>
    );
}

export default SponsorCard;