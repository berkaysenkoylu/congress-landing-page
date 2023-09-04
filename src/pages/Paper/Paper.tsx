import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './Paper.module.scss';

const Paper = () => {
    const { t } = useTranslation();

    return (
        <div className={classes.Paper}>
            <h2>{t('Paper.Title1')}</h2>
            <ol className={classes.Paper__List1} dangerouslySetInnerHTML={{ __html: t('Paper.List1') }} />

            <h4>{t('Paper.Title2')}</h4>
            <i className={classes.Paper__Note} dangerouslySetInnerHTML={{ __html: t('Paper.Note') }} />
            <ol className={classes.Paper__List2} dangerouslySetInnerHTML={{ __html: t('Paper.List2') }} />
            <p className={classes.Paper__Note2} dangerouslySetInnerHTML={{ __html: t('Paper.Note2') }} />

            <h4>{t('Paper.Title3')}</h4>
            <p className={classes.Paper__Presentation} dangerouslySetInnerHTML={{ __html: t('Paper.PresentationText') }} />
        </div>
    )
}

export default Paper;