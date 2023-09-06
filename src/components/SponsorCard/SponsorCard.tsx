import React, { useRef } from 'react';

import classes from './SponsorCard.module.scss';

interface SponsorCardPropsType {
    imageUrl: string
    imageAlt: string
    isFirstClone?: boolean
}

const SponsorCard = (props: SponsorCardPropsType) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const { imageAlt, imageUrl, isFirstClone } = props;

    if (isFirstClone) {
        console.log(cardRef.current?.getBoundingClientRect().left)
    }

    return (
        <div className={classes.SponsorCard} ref={cardRef}>
            <img alt={imageAlt} src={imageUrl} />
        </div>
    );
}

export default SponsorCard;