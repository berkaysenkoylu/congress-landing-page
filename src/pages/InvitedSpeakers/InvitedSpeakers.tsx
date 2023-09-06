import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './InvitedSpeakers.module.scss';

const InvitedSpeakers = () => {
    const { t } = useTranslation();
    return (
        <div className={classes.InvitedSpeakers}>
            <h2>{t("InvitedSpeakers.Title")}</h2>    
        </div>
    )
}

export default InvitedSpeakers