import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './Committees.module.scss';
import PersonCard from './PersonCard/PersonCard';
import SponsorCard from '../../components/SponsorCard/SponsorCard';

const Committees = () => {
    const { i18n, t } = useTranslation();

    const supporter1 = require('../../assets/images/LOGOS/Destekleyen/trveormanbakanlğı.png');
    const supporter2 = require('../../assets/images/LOGOS/Destekleyen/uluslararasıhayvancılık.png');
    const supporter3 = require('../../assets/images/LOGOS/Destekleyen/besd-bir.png');
    const supporter4 = require('../../assets/images/LOGOS/Destekleyen/tr-yem-sanayicileri.png');

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

            <h2>{t('Committees.Title3').toLocaleUpperCase(i18n.language === 'en' ? 'en-US': 'tr-TR')}</h2>

            <div className={classes.Committees__Supporters}>
                <SponsorCard
                    imageUrl={supporter1}
                    imageAlt='supporter1'
                    customStyle={{ marginRight: '0', height: '25rem' }}
                />
                <SponsorCard
                    imageUrl={supporter2}
                    imageAlt='supporter2'
                    customStyle={{ marginRight: '0', height: '25rem' }}
                />
                <SponsorCard
                    imageUrl={supporter3}
                    imageAlt='supporter3'
                    customStyle={{ marginRight: '0', height: '25rem' }}
                />
                <SponsorCard
                    imageUrl={supporter4}
                    imageAlt='supporter4'
                    customStyle={{ marginRight: '0', height: '25rem' }}
                />
            </div>
        </div>
    )
}

export default Committees;