import React from 'react';

import classes from './ImageShowcase.module.scss';

interface ImageShowcasePropsType {
    imageUrl: string
    alt: string
    isOverlayed?: boolean
    overlayTitle?: string
    overlaySubTitle?: string
}

const ImageShowcase = (props: ImageShowcasePropsType) => {
    const { alt, imageUrl, isOverlayed, overlayTitle, overlaySubTitle } = props;

    const renderOverlayText = () => {
        return (
            <div className={classes.ImageShowcase__OverlayText}>
                <h2>{overlayTitle}</h2>
                <p>{overlaySubTitle}</p>
            </div>
        )
    }

    return (
        <figure className={classes.ImageShowcase}>
            {isOverlayed ? <div className={classes.ImageShowcase__Overlay}></div> : null}
            {isOverlayed && overlayTitle ? renderOverlayText() : null}
            <img alt={alt} src={imageUrl} />
        </figure>
    );
}

export default ImageShowcase;