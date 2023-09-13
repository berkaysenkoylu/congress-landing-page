import React from 'react';

import classes from './ImageShowcase.module.scss';

interface ImageShowcasePropsType {
    imageUrl: string
    alt: string
    isOverlayed?: boolean
    overlayTextPosition?: 'Top' | 'Mid' | 'Bottom'
    overlayTitle?: string
    overlaySubTitle?: string
}

const ImageShowcase = (props: ImageShowcasePropsType) => {
    const { alt, imageUrl, isOverlayed, overlayTitle, overlaySubTitle, overlayTextPosition } = props;

    let overlayTextStyle = {
        top: '50%'
    }

    const renderOverlayText = () => {
        return (
            <div className={classes.ImageShowcase__OverlayText} style={overlayTextStyle}>
                <h2>{overlayTitle}</h2>
                <p>{overlaySubTitle}</p>
            </div>
        )
    }

    switch (overlayTextPosition) {
        case 'Top':
            overlayTextStyle = {
                top: window.innerWidth > 600 ? '15%' : '30%'
            };
            break;
        case 'Mid':
            overlayTextStyle = {
                top: '50%'
            };
            break;
        case 'Bottom':
            overlayTextStyle = {
                top: window.innerWidth > 600 ? '85%' : '70%'
            };
            break;
        default:
            break;
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