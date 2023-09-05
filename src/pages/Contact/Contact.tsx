import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './Contact.module.scss';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <div className={classes.Contact}>
            <h2>{t('Contact.Title')}</h2>

            <p dangerouslySetInnerHTML={{ __html: t('Contact.ContactText') }} />
        </div>
    )
}

export default Contact;