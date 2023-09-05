import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './Committees.module.scss';
import PersonCard from './PersonCard/PersonCard';

const Committees = () => {
    const { i18n, t } = useTranslation();

    return (
        <div className={classes.Committees}>
            <PersonCard
                name='Prof. Dr. Nizammettin ŞENKÖYLÜ'
                statusText={t('Committees.StatusCongressChair')}
                customStyle={{ margin: '4rem auto 8rem auto' }}
            />

            <h2>{t('Committees.Title1').toLocaleUpperCase(i18n.language === 'en' ? 'en-US': 'tr-TR')}</h2>

            <div className={classes.Committees__Organization}>
                <PersonCard
                    name='Prof. Dr. Şakir Doğan TUNCER'
                    statusText={t('Committees.StatusChair')}
                    customStyle={{
                        gridColumn: '2',
                        gridRow: '1'
                    }}
                />

                <PersonCard
                    name='Prof. Dr. Sakine YALÇIN'
                    customStyle={{
                        gridRow: '2',
                        gridColumn: '1',
                    }}
                />

                <PersonCard
                    name='Prof. Dr. İbrahim AK'
                    customStyle={{
                        gridRow: '2',
                        gridColumn: '2'
                    }}
                />

                <PersonCard
                    name='Prof. Dr. Seher KÜÇÜKERSAN'
                    customStyle={{
                        gridRow: '2',
                        gridColumn: '3'
                    }}
                />

                <PersonCard
                    name='Doç. Dr. Cengizhan MIZRAK'
                    customStyle={{
                        gridRow: '3',
                        gridColumn: '1'
                    }}
                />
            </div>

            <h2>{t('Committees.Title2').toLocaleUpperCase(i18n.language === 'en' ? 'en-US': 'tr-TR')}</h2>

            <div className={classes.Committees__Science}>
                <PersonCard
                    name='Prof. Dr. Sakine YALÇIN'
                    statusText={t('Committees.StatusChair')}
                    customStyle={{
                        gridColumn: '2',
                        gridRow: '1'
                    }}
                />
            </div>
        </div>
    )
}

export default Committees;