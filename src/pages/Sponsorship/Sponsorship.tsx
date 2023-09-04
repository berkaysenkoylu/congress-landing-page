import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './Sponsorship.module.scss';

const Sponsorship = () => {
    const { t } = useTranslation();

    return (
        <div className={classes.Sponsorship}>
            <h2>{t('Sponsorship.Title')}</h2>

            <p className={classes.MarginBottom4} dangerouslySetInnerHTML={{ __html: t('Sponsorship.Text') }} />

            <h3>{t('Sponsorship.TableTitle')}</h3>

            <table className={classes.Table}>
                <thead>
                    <tr>
                        <th>{t('Sponsorship.TableRow1Col1')}</th>
                        <th className={classes.CenterAlign}>{t('Sponsorship.TableRow1Col2')}</th>
                        <th>{t('Sponsorship.TableRow1Col3')}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>{t('Sponsorship.TableRow2Col1')}</th>
                        <th className={classes.CenterAlign}>10.000</th>
                        <th>{t('Sponsorship.TableRow2Col3')}</th>
                    </tr>

                    <tr>
                        <th>{t('Sponsorship.TableRow3Col1')}</th>
                        <th className={classes.CenterAlign}>8.000</th>
                        <th>{t('Sponsorship.TableRow3Col3')}</th>
                    </tr>

                    <tr>
                        <th>{t('Sponsorship.TableRow4Col1')}</th>
                        <th className={classes.CenterAlign}>6.000</th>
                        <th>{t('Sponsorship.TableRow4Col3')}</th>
                    </tr>

                    <tr>
                        <th>{t('Sponsorship.TableRow5Col1')}</th>
                        <th className={classes.CenterAlign}>4.000</th>
                        <th>{t('Sponsorship.StandText')}</th>
                    </tr>

                    <tr>
                        <th>{t('Sponsorship.TableRow6Col1')}</th>
                        <th className={classes.CenterAlign}>2.000</th>
                        <th>{t('Sponsorship.StandText')}</th>
                    </tr>

                    <tr>
                        <th>{t('Sponsorship.TableRow7Col1')}</th>
                        <th className={classes.CenterAlign}>{t('Sponsorship.SoldText')}</th>
                        <th>{t('Sponsorship.StandText')}</th>
                    </tr>

                    <tr>
                        <th>{t('Sponsorship.TableRow8Col1')}</th>
                        <th className={classes.CenterAlign}>{t('Sponsorship.SoldText')}</th>
                        <th>{t('Sponsorship.StandText')}</th>
                    </tr>

                    <tr>
                        <th>{t('Sponsorship.TableRow9Col1')}</th>
                        <th className={classes.CenterAlign}>{t('Sponsorship.SoldText')}</th>
                        <th>{t('Sponsorship.StandText')}</th>
                    </tr>

                    <tr>
                        <th>{t('Sponsorship.TableRow10Col1')}</th>
                        <th className={classes.CenterAlign}>3.000</th>
                        <th>{t('Sponsorship.StandRoomText')}</th>
                    </tr>

                    <tr>
                        <th>{t('Sponsorship.TableRow11Col1')}</th>
                        <th className={classes.CenterAlign}>1.500</th>
                        <th>{t('Sponsorship.StandText')}</th>
                    </tr>

                    <tr>
                        <th>{t('Sponsorship.TableRow12Col1')}</th>
                        <th className={classes.CenterAlign}>1.000</th>
                        <th>{t('Sponsorship.StandText')}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Sponsorship;