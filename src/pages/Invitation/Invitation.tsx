import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './Invitation.module.scss';

const Invitation = () => {
    const { t } = useTranslation();

    return (
        <div className={classes.Invitation}>
            <p dangerouslySetInnerHTML={{ __html: t('Invitation.Title') }} />
            <p dangerouslySetInnerHTML={{ __html: t('Invitation.Par1') }} />
            <p dangerouslySetInnerHTML={{ __html: t('Invitation.Par2') }} />
            <p dangerouslySetInnerHTML={{ __html: t('Invitation.Par3') }} />
            <p dangerouslySetInnerHTML={{ __html: t('Invitation.Par4') }} />

            <div className={classes.Invitation__Signature}>
                <p dangerouslySetInnerHTML={{ __html: t('Invitation.Sign1') }} />
                <p dangerouslySetInnerHTML={{ __html: t('Invitation.Sign2') }} />
            </div>
        </div>
    )
}

export default Invitation