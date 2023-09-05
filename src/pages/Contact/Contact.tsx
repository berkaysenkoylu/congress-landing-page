import React from 'react';
import { useTranslation } from 'react-i18next';

import svg from '../../assets/images/sprites.svg';
import classes from './Contact.module.scss';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <div className={classes.Contact}>
            <h2>{t('Contact.Title')}</h2>

            <p dangerouslySetInnerHTML={{ __html: t('Contact.ContactText') }} />

            <table className={classes.Table}>
                <thead>
                    <tr>
                        <th></th>
                        <th>
                            <div className={classes.FlexContainer}>
                                <svg className={classes.Icon}>
                                    <use xlinkHref={`${svg}#icon-phone`}></use>
                                </svg>
                                <span>{t('Contact.Phone')}</span>
                            </div>
                        </th>
                        <th>
                            <div className={classes.FlexContainer}>
                                <svg className={classes.Icon}>
                                    <use xlinkHref={`${svg}#icon-contact_mail`}></use>
                                </svg>
                                <span>{t('Contact.Email')}</span>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Prof. Dr. Sakine Yalçın</th>
                        <th>0 530 229 57 47</th>
                        <th>sayalcin@ankara.edu.tr</th>
                    </tr>

                    <tr>
                        <th>Prof. Dr. Şakir Doğan Tuncer</th>
                        <th>0 532 599 77 46</th>
                        <th>sdtuncer@gmail.com</th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Contact;