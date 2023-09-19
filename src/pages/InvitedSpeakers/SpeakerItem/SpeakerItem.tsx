import React from 'react';

import classes from './SpeakerItem.module.scss';

interface SpeakerItemPropsType {
    name: string
    status?: string
    occupation: string
    panel: string
    title?: string
    bio?: string
    img?: string
}

const SpeakerItem = (props: SpeakerItemPropsType) => {
    const { name, status, occupation, panel, bio, title } = props;
    let { img } = props;
    const defaultImage = require('../../../assets/images/avatar-default.png');

    if (!img) {
        img = defaultImage;
    }

    return (
        <div className={classes.SpeakerItem}>
            <div className={classes.SpeakerItem__Profile}>
                <figure>
                    <img alt="test" src={img} />
                    <figcaption>
                        <p>{name}</p>
                        <p>{status}</p>
                        <p>{occupation}</p>
                    </figcaption>
                </figure>
            </div>
            <div className={classes.SpeakerItem__Info}>
                <div className={classes.SpeakerItem__Info__Panel}>
                    <h2>{title || 'Panel'}</h2>
                    <p>{panel}</p>
                </div>
                <div>
                    {bio !== '' ? (<>
                        <h2>BIO</h2>
                        <p>{bio}</p>
                    </>) : null}
                </div>
            </div>
        </div>
    )
}

export default SpeakerItem;