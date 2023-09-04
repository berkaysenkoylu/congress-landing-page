import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './Committees.module.scss';
import PersonCard from './PersonCard/PersonCard';

const Committees = () => {
    const { i18n, t } = useTranslation();

    return (
        <div className={classes.Committees}>
            <h2>{t('Committees.Title1').toLocaleUpperCase(i18n.language === 'en' ? 'en-US': 'tr-TR')}</h2>

            <div className={classes.Committees__Organization}>
                <PersonCard name='Prof. Dr. Şakir Doğan TUNCER' statusText={t('Committees.StatusChair')} />

                <PersonCard name='Prof. Dr. Sakine YALÇIN' />

                <PersonCard name='Prof. Dr. İbrahim AK' />

                <PersonCard name='Prof. Dr. Seher KÜÇÜKERSAN' />

                <PersonCard name='Doç. Dr. Cengizhan MIZRAK' />
            </div>

            <h2>{t('Committees.Title2').toLocaleUpperCase(i18n.language === 'en' ? 'en-US': 'tr-TR')}</h2>

            <div className={classes.Committees__Science}>
                <PersonCard name='Prof. Dr. Sakine YALÇIN' statusText={t('Committees.StatusChair')} />
            </div>
        </div>
    )
}

export default Committees;