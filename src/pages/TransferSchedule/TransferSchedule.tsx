import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './TransferSchedule.module.scss';

const TransferSchedule = () => {
    const { t } = useTranslation();

    return (
        <div className={classes.TransferSchedule}>
            <h2>{t('TransferSchedule.Title')}</h2>

            <div className={classes.TransferSchedule__Tables}>
                <div className={classes.TransferSchedule__Table}>
                    <h3>{t('TransferSchedule.Table1Title')}</h3>
                    <h4>{t('TransferSchedule.Table1Date')}</h4>
                    <table>
                        <thead>
                            <tr>
                                <td>{t('TransferSchedule.TableRow1Column1')}</td>
                                <td>{t('TransferSchedule.TableRow1Column2')}</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={classes.TransferSchedule__TableRow}>1</td>
                                <td className={classes.TransferSchedule__TableRow}>08:30</td>
                            </tr>
                            <tr>
                                <td className={classes.TransferSchedule__TableRow}>2</td>
                                <td className={classes.TransferSchedule__TableRow}>10:00</td>
                            </tr>
                            <tr>
                                <td className={classes.TransferSchedule__TableRow}>3</td>
                                <td className={classes.TransferSchedule__TableRow}>11:00</td>
                            </tr>
                            <tr>
                                <td className={classes.TransferSchedule__TableRow}>4</td>
                                <td className={classes.TransferSchedule__TableRow}>12:30</td>
                            </tr>
                            <tr>
                                <td className={classes.TransferSchedule__TableRow}>5</td>
                                <td className={classes.TransferSchedule__TableRow}>14:00</td>
                            </tr>
                            <tr>
                                <td className={classes.TransferSchedule__TableRow}>6</td>
                                <td className={classes.TransferSchedule__TableRow}>16:00</td>
                            </tr>
                            <tr>
                                <td className={classes.TransferSchedule__TableRow}>7</td>
                                <td className={classes.TransferSchedule__TableRow}>18:30</td>
                            </tr>
                            <tr>
                                <td className={classes.TransferSchedule__TableRow}>8</td>
                                <td className={classes.TransferSchedule__TableRow}>22:00</td>
                            </tr>
                            <tr>
                                <td className={classes.TransferSchedule__TableRow}>9</td>
                                <td className={classes.TransferSchedule__TableRow}>23:00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className={classes.TransferSchedule__Table}>
                    <h3>{t('TransferSchedule.Table2Title')}</h3>
                    <h4>{t('TransferSchedule.Table2Date')}</h4>
                    <table>
                        <thead>
                            <tr>
                                <td>{t('TransferSchedule.TableRow1Column1')}</td>
                                <td>{t('TransferSchedule.TableRow1Column2')}</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={classes.TransferSchedule__TableRow}>1</td>
                                <td className={classes.TransferSchedule__TableRow}>07:30</td>
                            </tr>
                            <tr>
                                <td className={classes.TransferSchedule__TableRow}>2</td>
                                <td className={classes.TransferSchedule__TableRow}>09:00</td>
                            </tr>
                            <tr>
                                <td className={classes.TransferSchedule__TableRow}>3</td>
                                <td className={classes.TransferSchedule__TableRow}>10:30</td>
                            </tr>
                            <tr>
                                <td className={classes.TransferSchedule__TableRow}>4</td>
                                <td className={classes.TransferSchedule__TableRow}>12:00</td>
                            </tr>
                            <tr>
                                <td className={classes.TransferSchedule__TableRow}>5</td>
                                <td className={classes.TransferSchedule__TableRow}>13:10</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TransferSchedule;