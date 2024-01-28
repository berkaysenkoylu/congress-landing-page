import { useTranslation } from 'react-i18next';

import classes from './Committees.module.scss';
import PersonCard from './PersonCard/PersonCard';
import SponsorCard from '../../components/SponsorCard/SponsorCard';

const Committees = () => {
    const { i18n, t } = useTranslation();

    const supporter1 = require('../../assets/images/LOGOS/Destekleyen/trveormanbakanlğı.png');
    const supporter2 = require('../../assets/images/LOGOS/Destekleyen/uluslararasıhayvancılık.png');
    const supporter3 = require('../../assets/images/LOGOS/Destekleyen/tr-yem-sanayicileri.png');
    const supporter4 = require('../../assets/images/LOGOS/Destekleyen/yuniko_logo.png');
    const supporter5 = require('../../assets/images/LOGOS/Destekleyen/besd-bir.png');
    const supporter6 = require('../../assets/images/LOGOS/Destekleyen/tuyekad.png');

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
                        gridColumn: window.innerWidth > 600 ? '2' : '2 / 4',
                        gridRow: '1'
                    }}
                />

                <PersonCard
                    name='Prof. Dr. Sakine YALÇIN'
                    customStyle={{
                        gridRow: '2',
                        gridColumn: window.innerWidth > 600 ? '1' : '1 / 3',
                    }}
                />

                <PersonCard
                    name='Prof. Dr. İbrahim AK'
                    customStyle={{
                        gridRow: '2',
                        gridColumn: window.innerWidth > 600 ? '2' : '3 / 5'
                    }}
                />

                <PersonCard
                    name='Prof. Dr. Seher KÜÇÜKERSAN'
                    customStyle={{
                        gridRow: window.innerWidth > 600 ? '2' : '3',
                        gridColumn: window.innerWidth > 600 ? '3' : '1 / 3'
                    }}
                />

                <PersonCard
                    name='Doç. Dr. Cengizhan MIZRAK'
                    customStyle={{
                        gridRow: '3',
                        gridColumn: window.innerWidth > 600 ? '1' : '3 / 5'
                    }}
                />
            </div>

            <h2>{t('Committees.Title2').toLocaleUpperCase(i18n.language === 'en' ? 'en-US': 'tr-TR')}</h2>

            <ul className={classes.Committees__Science}>
                <li dangerouslySetInnerHTML={{ __html: t('Committees.ScientificCommitteeLine1')}}/>
                <li dangerouslySetInnerHTML={{ __html: t('Committees.ScientificCommitteeLine2')}}/>
                <li dangerouslySetInnerHTML={{ __html: t('Committees.ScientificCommitteeLine3')}}/>
                <li dangerouslySetInnerHTML={{ __html: t('Committees.ScientificCommitteeLine4')}}/>
                <li dangerouslySetInnerHTML={{ __html: t('Committees.ScientificCommitteeLine5')}}/>
                <li dangerouslySetInnerHTML={{ __html: t('Committees.ScientificCommitteeLine6')}}/>
                <li dangerouslySetInnerHTML={{ __html: t('Committees.ScientificCommitteeLine7')}}/>
                <li dangerouslySetInnerHTML={{ __html: t('Committees.ScientificCommitteeLine8')}}/>
                <li dangerouslySetInnerHTML={{ __html: t('Committees.ScientificCommitteeLine9')}}/>
                <li dangerouslySetInnerHTML={{ __html: t('Committees.ScientificCommitteeLine10')}}/>
                <li dangerouslySetInnerHTML={{ __html: t('Committees.ScientificCommitteeLine11')}}/>
                <li dangerouslySetInnerHTML={{ __html: t('Committees.ScientificCommitteeLine12')}}/>
                <li dangerouslySetInnerHTML={{ __html: t('Committees.ScientificCommitteeLine13')}}/>
                <li dangerouslySetInnerHTML={{ __html: t('Committees.ScientificCommitteeLine14')}}/>
                <li dangerouslySetInnerHTML={{ __html: t('Committees.ScientificCommitteeLine15')}}/>
                <li dangerouslySetInnerHTML={{ __html: t('Committees.ScientificCommitteeLine16')}}/>
                <li dangerouslySetInnerHTML={{ __html: t('Committees.ScientificCommitteeLine17')}}/>
                <li dangerouslySetInnerHTML={{ __html: t('Committees.ScientificCommitteeLine18')}}/>
            </ul>

            <h2>{t('Committees.Title3').toLocaleUpperCase(i18n.language === 'en' ? 'en-US': 'tr-TR')}</h2>

            <div className={classes.Committees__Supporters}>
                <SponsorCard
                    imageUrl={supporter1}
                    imageAlt='supporter1'
                    customStyle={{ marginRight: '0', height: '25rem', maxWidth: '25rem' }}
                />
                <SponsorCard
                    imageUrl={supporter2}
                    imageAlt='supporter2'
                    customStyle={{ marginRight: '0', height: '25rem', maxWidth: '25rem' }}
                />
                <SponsorCard
                    imageUrl={supporter3}
                    imageAlt='supporter3'
                    customStyle={{ marginRight: '0', height: '25rem', maxWidth: '25rem' }}
                />
                <SponsorCard
                    imageUrl={supporter4}
                    imageAlt='supporter4'
                    customStyle={{ marginRight: '0', height: '25rem', maxWidth: '25rem' }}
                />
                <SponsorCard
                    imageUrl={supporter5}
                    imageAlt='supporter5'
                    customStyle={{ marginRight: '0', height: '25rem', maxWidth: '25rem' }}
                />
                <SponsorCard
                    imageUrl={supporter6}
                    imageAlt='supporter6'
                    customStyle={{ marginRight: '0', height: '25rem', maxWidth: '25rem' }}
                />
            </div>
        </div>
    )
}

export default Committees;