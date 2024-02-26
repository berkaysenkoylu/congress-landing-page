import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { Context } from '../../App';
import svg from '../../assets/images/sprites.svg';
import classes from './Notice.module.scss';

const Notice = () => {
    const { t } = useTranslation();
    const [_, setPageName] = useContext(Context);

    return (
        <h2 className={classes.Notice}>
            <svg className={classes.Icon}>
                <use xlinkHref={`${svg}#icon-warning`}></use>
            </svg>
            <button onClick={() => setPageName("TransferSchedule")}>{t('Navigation.Notice')}</button>
            <svg className={classes.Icon}>
                <use xlinkHref={`${svg}#icon-warning`}></use>
            </svg>
        </h2>
    )
}

export default Notice;