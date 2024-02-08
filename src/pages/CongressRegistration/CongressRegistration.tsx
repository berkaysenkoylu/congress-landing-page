import React from 'react';
import { useTranslation } from 'react-i18next';

import svg from '../../assets/images/sprites.svg';
import classes from './CongressRegistration.module.scss';

const CongressRegistration = () => {
    const { t } = useTranslation();

    const renderFirstTable = () => {
        return (
            <table className={classes.Table1}>
                <thead>
                    <tr className={classes.Table1__UpperHeader}>
                        <th rowSpan={2}>{t('Registration.RoomType')}</th>
                        <th colSpan={2} className={classes.Table1__ColumnTitle}>
                            <span>{t('Registration.EarlyReg')}</span>
                            <span>{t('Registration.Date1')}</span>
                        </th>
                        <th colSpan={2} className={classes.Table1__ColumnTitle}>
                            <span>{t('Registration.LateReg')}</span>
                            <span>{t('Registration.Date2')}</span>
                        </th>
                    </tr>
                    <tr className={classes.Table1__LowerHeader}>
                        <th>{t('Registration.Member')}</th>
                        <th>{t('Registration.NoMember')}</th>
                        <th>{t('Registration.Member')}</th>
                        <th>{t('Registration.NoMember')}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={classes.BoldText}>{t('Registration.RoomCap1')}</td>
                        <td className={classes.CenterAlign}>400 €</td>
                        <td className={classes.CenterAlign}>440 €</td>
                        <td className={classes.CenterAlign}>440 €</td>
                        <td className={classes.CenterAlign}>490 €</td>
                    </tr>
                    <tr>
                        <td className={classes.BoldText}>{t('Registration.RoomCap2')}</td>
                        <td className={classes.CenterAlign}>230 €</td>
                        <td className={classes.CenterAlign}>250 €</td>
                        <td className={classes.CenterAlign}>250 €</td>
                        <td className={classes.CenterAlign}>280 €</td>
                    </tr>
                    <tr>
                        <td className={classes.BoldText}>{t('Registration.RoomCap3')}</td>
                        <td className={classes.CenterAlign}>210 €</td>
                        <td className={classes.CenterAlign}>230 €</td>
                        <td className={classes.CenterAlign}>230 €</td>
                        <td className={classes.CenterAlign}>260 €</td>
                    </tr>
                </tbody>
            </table>
        )
    }

    const renderLastTable = () => {
        return (
            <table className={classes.Table2}>
                <tbody>
                    <tr>
                        <th>{t('Registration.Table2Row1Col1')}</th>
                        <th className={classes.NormalText}>{t('Registration.Table2Row1Col2')}</th>
                    </tr>

                    <tr>
                        <th>{t('Registration.Table2Row2Col1')}</th>
                        <th className={classes.NormalText}>{t('Registration.Table2Row2Col2')}</th>
                    </tr>

                    <tr>
                        <th>{t('Registration.Table2Row3Col1')}</th>
                        <th className={classes.NormalText}>{t('Registration.Table2Row3Col2')}</th>
                    </tr>
                </tbody>
            </table>
        );
    }

    return (
        <div className={classes.CongressRegistration}>
            <h2>{t('Registration.Title1')}</h2>

            <h3>
                <svg className={classes.Icon}>
                    <use xlinkHref={`${svg}#icon-warning`}></use>
                </svg>
                {t('Registration.FlashText')}
                <svg className={classes.Icon}>
                    <use xlinkHref={`${svg}#icon-warning`}></use>
                </svg>
            </h3>

            <p dangerouslySetInnerHTML={{ __html: t('Registration.Text1') }} />

            <h5 dangerouslySetInnerHTML={{ __html: t('Registration.Table1Title') }} />
            
            {renderFirstTable()}

            <div className={classes.Table1Notes}>
                <p dangerouslySetInnerHTML={{ __html: t('Registration.Table1Note1') }} />

                <p dangerouslySetInnerHTML={{ __html: t('Registration.Table1Note2') }} />
            </div>

            <h4>{t('Registration.Title2')}</h4>

            <p dangerouslySetInnerHTML={{ __html: t('Registration.PackageContent') }} />

            <h4>{t('Registration.Title3')}</h4>

            {/* <p dangerouslySetInnerHTML={{ __html: t('Registration.Payment1') }} />
            <p dangerouslySetInnerHTML={{ __html: t('Registration.Payment2') }} />
            <p dangerouslySetInnerHTML={{ __html: t('Registration.Payment3') }} />
            <p dangerouslySetInnerHTML={{ __html: t('Registration.Payment4') }} /> */}

            <p dangerouslySetInnerHTML={{ __html: t('Registration.NewPaymentText') }} />

            <h4>{t('Registration.Title4')}</h4>

            <p dangerouslySetInnerHTML={{ __html: t('Registration.Language') }} />

            <h4>{t('Registration.Title5')}</h4>

            <p dangerouslySetInnerHTML={{ __html: t('Registration.Abstract1') }} />
            <p dangerouslySetInnerHTML={{ __html: t('Registration.Abstract2') }} />

            <h4>{t('Registration.Title6')}</h4>

            {renderLastTable()}

            <div className={classes.Table1Notes}>
                <p className={classes.CenterAlign} dangerouslySetInnerHTML={{ __html: t('Registration.Table2Note') }} />
            </div>
        </div>
    )
}

export default CongressRegistration;