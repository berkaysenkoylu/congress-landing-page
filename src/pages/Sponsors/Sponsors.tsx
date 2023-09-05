import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './Sponsors.module.scss';

const Sponsors = () => {
    const { t } = useTranslation();

    return (
        <div className={classes.Sponsors}>
            <h2>{t('Sponsors.Title')}</h2>

            <table className={classes.Table}>
                <thead>
                    <tr>
                        <th>{t('Sponsors.TableRow1Col1')}</th>
                        <th>{t('Sponsors.TableRow1Col2')}</th>
                        <th>{t('Sponsors.TableRow1Col3')}</th>
                        <th>{t('Sponsors.TableRow1Col4')}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>{t('Sponsors.TableRow2Col1')}</th>
                        <th>-</th>
                        <th>10.000</th>
                        <th>{t('Sponsors.TableRow2Col4')}</th>
                    </tr>

                    <tr>
                        <th>{t('Sponsors.TableRow3Col1')}</th>
                        <th>CARGİLL</th>
                        <th>8.000</th>
                        <th>{t('Sponsors.TableRow3Col4')}</th>
                    </tr>

                    <tr>
                        <th>{t('Sponsors.TableRow4Col1')}</th>
                        <th>DSM</th>
                        <th>6.000</th>
                        <th>{t('Sponsors.TableRow4Col4')}</th>
                    </tr>

                    <tr>
                        <th>{t('Sponsors.TableRow5Col1')}</th>
                        <th>-</th>
                        <th>4.000</th>
                        <th>{t('Sponsors.StandText')}</th>
                    </tr>

                    <tr>
                        <th>{t('Sponsors.TableRow6Col1')}</th>
                        <th>
                            <ul>
                                <li>EW NUTRITION</li>
                                <li>ABP</li>
                                <li>MAKROVİT</li>
                                <li>BRT YEM KATKI</li>
                                <li>MEKO</li>
                                <li>DSA</li>
                                <li>PHIBRO</li>
                            </ul>
                        </th>
                        <th>2.000</th>
                        <th>{t('Sponsors.StandText')}</th>
                    </tr>

                    <tr>
                        <th>{t('Sponsors.TableRow7Col1')}</th>
                        <th>ADİSSEO</th>
                        <th>{t('Sponsors.SoldText')}</th>
                        <th>{t('Sponsors.StandText')}</th>
                    </tr>

                    <tr>
                        <th>{t('Sponsors.TableRow8Col1')}</th>
                        <th>ELANCO</th>
                        <th>{t('Sponsors.SoldText')}</th>
                        <th>{t('Sponsors.StandText')}</th>
                    </tr>

                    <tr>
                        <th>{t('Sponsors.TableRow9Col1')}</th>
                        <th>KARTAL KİMYA</th>
                        <th>{t('Sponsors.SoldText')}</th>
                        <th>{t('Sponsors.StandText')}</th>
                    </tr>

                    <tr>
                        <th>{t('Sponsors.TableRow10Col1')}</th>
                        <th>
                            <ul>
                                <li>ALLTECH</li>
                                <li>HUVEFARMA</li>
                            </ul>
                        </th>
                        <th>3.000</th>
                        <th>{t('Sponsors.StandRoomText')}</th>
                    </tr>

                    <tr>
                        <th>{t('Sponsors.TableRow11Col1')}</th>
                        <th>-</th>
                        <th>1.500</th>
                        <th>{t('Sponsors.StandText')}</th>
                    </tr>

                    <tr>
                        <th>{t('Sponsors.TableRow12Col1')}</th>
                        <th>-</th>
                        <th>1.000</th>
                        <th>{t('Sponsors.StandText')}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Sponsors;