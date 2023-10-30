import { useTranslation } from 'react-i18next';

import classes from './ProgramTable.module.scss';

const ProgramTable = () => {
    const { t } = useTranslation();

    return (
        <table className={classes.ProgramTable}>
            <thead>
                <tr>
                    <td className={classes.ProgramTable__Row} colSpan={2}>
                        <h3>{t('Committees.ProgramTableTitle')}</h3>

                        <h3><i>{t('Committees.ProgramTableSubTitle')}</i></h3>
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className={classes.ProgramTable__Row} width={"30%"}>
                        <div className={classes.RedText}>{t('Committees.ProgramTableDate1')}</div>
                        <div className={classes.BoldText}>{t('Committees.ProgramTableRow1Text2')}</div>
                    </td>
                    <td className={classes.ProgramTable__Row}>
                        <div className={classes.BoldText}>{t('Committees.ProgramTableRow1Text1')}</div>
                        <div>{t('Committees.ProgramTableRow1Text3')}</div>
                    </td>
                </tr>

                <tr>
                    <td className={classes.ProgramTable__Row}>
                        <span className={classes.RedText}>{t('Committees.ProgramTableDate2')}</span>
                    </td>
                    <td></td>
                </tr>

                <tr>
                    <td className={classes.ProgramTable__Row}>
                        <span className={classes.BoldText}>{t('Committees.ProgramTableRow3Col1')}</span>
                    </td>
                    <td className={classes.ProgramTable__Row}>{t('Committees.ProgramTableRow3Col2')}</td>
                </tr>

                <tr>
                    <td className={classes.ProgramTable__Row}>
                        <div className={classes.BoldText}>{t('Committees.ProgramTableRow4Text1')}</div>

                        <div className={classes.BoldText}>{t('Committees.ProgramTableRow4Text2')}</div>
                    </td>
                    <td className={classes.ProgramTable__Row}>
                        <div>{t('Committees.ProgramTableRow4Text3')}</div>

                        <ul>
                            <li dangerouslySetInnerHTML={{ __html: t('Committees.ProgramTableRow4Text4') }} />
                            <li dangerouslySetInnerHTML={{ __html: t('Committees.ProgramTableRow4Text5') }} />
                            <li dangerouslySetInnerHTML={{ __html: t('Committees.ProgramTableRow4Text6') }} />
                            <li dangerouslySetInnerHTML={{ __html: t('Committees.ProgramTableRow4Text7') }} />
                            <li dangerouslySetInnerHTML={{ __html: t('Committees.ProgramTableRow4Text8') }} />
                        </ul>
                    </td>
                </tr>

                <tr>
                    <td className={classes.ProgramTable__Row}>
                        <span className={classes.BoldText}>{t('Committees.ProgramTableRow5Col1')}</span>
                    </td>
                    <td className={[classes.ProgramTable__Row, classes.BoldText, classes.CenterText].join(' ')}>{t('Committees.CoffeeBreak')}</td>
                </tr>

                <tr>
                    <td className={classes.ProgramTable__Row}>
                        <div className={classes.BoldText}>{t('Committees.ProgramTableRow6Col1')}</div>

                        <div className={classes.BoldText}>{t('Committees.RuminantNutrition').replace('#', "1")}</div>
                    </td>
                    <td className={classes.ProgramTable__Row}>
                        <ul>
                            <li dangerouslySetInnerHTML={{ __html: t('Committees.ProgramTableRow6Text1') }} />
                            <li dangerouslySetInnerHTML={{ __html: t('Committees.ProgramTableRow6Text2') }} />
                        </ul>

                        <div className={classes.MarginTop2halfrem}>{t('Committees.OralPresentations')}</div>
                    </td>
                </tr>

                <tr>
                    <td className={classes.ProgramTable__Row}>
                        <span className={classes.BoldText}>{t('Committees.ProgramTableRow7Col1')}</span>
                    </td>
                    <td className={[classes.ProgramTable__Row, classes.BoldText, classes.CenterText].join(' ')}>{t('Committees.LunchBreak')}</td>
                </tr>

                <tr>
                    <td className={classes.ProgramTable__Row}>
                        <div className={classes.BoldText}>{t('Committees.ProgramTableRow8Col1')}</div>

                        <div className={classes.BoldText}>{t('Committees.RuminantNutrition').replace('#', "2")}</div>
                    </td>
                    <td className={classes.ProgramTable__Row}>
                        <ul>
                            <li dangerouslySetInnerHTML={{ __html: t('Committees.ProgramTableRow8Text1') }} />
                            <li dangerouslySetInnerHTML={{ __html: t('Committees.ProgramTableRow8Text2') }} />
                        </ul>

                        <div className={classes.MarginTop2halfrem}>{t('Committees.OralPresentations')}</div>
                    </td>
                </tr>

                <tr>
                    <td className={classes.ProgramTable__Row}>
                        <span className={classes.BoldText}>{t('Committees.ProgramTableRow9Col1')}</span>
                    </td>
                    <td className={[classes.ProgramTable__Row, classes.BoldText, classes.CenterText].join(' ')}>{t('Committees.CoffeeBreak')}</td>
                </tr>

                <tr>
                    <td className={classes.ProgramTable__Row}>
                        <div className={classes.BoldText}>{t('Committees.ProgramTableRow10Col1')}</div>

                        <div className={classes.BoldText}>{t('Committees.RuminantNutrition').replace('#', "3")}</div>
                    </td>
                    <td className={classes.ProgramTable__Row}>
                        <ul>
                            <li dangerouslySetInnerHTML={{ __html: t('Committees.ProgramTableRow10Text1') }} />
                            <li dangerouslySetInnerHTML={{ __html: t('Committees.ProgramTableRow10Text2') }} />
                        </ul>

                        <div className={classes.MarginTop2halfrem}>{t('Committees.OralPresentations')}</div>
                    </td>
                </tr>

                <tr>
                    <td className={classes.ProgramTable__Row}>
                        <span className={classes.BoldText}>{t('Committees.ProgramTableRow11Col1')}</span>
                    </td>
                    <td></td>
                </tr>

                <tr>
                    <td className={classes.ProgramTable__Row}>
                        <div className={classes.BoldText}>{t('Committees.ProgramTableRow12Col1')}</div>

                        <div className={classes.BoldText}>{t('Committees.ProgramTableRow12Text1')}</div>
                    </td>
                    <td className={classes.ProgramTable__Row}>
                        <ul>
                            <li dangerouslySetInnerHTML={{ __html: t('Committees.ProgramTableRow12Text2') }} />
                        </ul>
                    </td>
                </tr>

                <tr>
                    <td className={classes.ProgramTable__Row}>
                        <span className={classes.RedText}>{t('Committees.ProgramTableDate3')}</span>
                    </td>
                    <td></td>
                </tr>

                <tr>
                    <td className={classes.ProgramTable__Row}>
                        <div className={classes.BoldText}>{t('Committees.ProgramTableRow13Col1')}</div>

                        <div className={classes.BoldText}>{t('Committees.ProgramTableRow13Text1')}</div>
                    </td>
                    <td className={classes.ProgramTable__Row}>
                        <ul>
                            <li dangerouslySetInnerHTML={{ __html: t('Committees.ProgramTableRow13Text2') }} />
                            <li dangerouslySetInnerHTML={{ __html: t('Committees.ProgramTableRow13Text3') }} />
                            <li dangerouslySetInnerHTML={{ __html: t('Committees.ProgramTableRow13Text4') }} />
                            <li dangerouslySetInnerHTML={{ __html: t('Committees.ProgramTableRow13Text5') }} />
                            <li dangerouslySetInnerHTML={{ __html: t('Committees.ProgramTableRow13Text6') }} />
                        </ul>

                        <div className={classes.MarginTop2halfrem} dangerouslySetInnerHTML={{ __html: t('Committees.ProgramTableRow13Text7') }}/>
                    </td>
                </tr>

                <tr>
                    <td className={classes.ProgramTable__Row}>
                        <span className={classes.BoldText}>{t('Committees.ProgramTableRow14Col1')}</span>
                    </td>
                    <td className={[classes.ProgramTable__Row, classes.BoldText, classes.CenterText].join(' ')}>{t('Committees.CoffeeBreak')}</td>
                </tr>

                <tr>
                    <td className={classes.ProgramTable__Row}>
                        <div className={classes.BoldText}>{t('Committees.ProgramTableRow15Col1')}</div>

                        <div className={classes.BoldText}>{t('Committees.ProgramTableRow15Text1')}</div>
                    </td>
                    <td className={classes.ProgramTable__Row}>
                        <ul>
                            <li dangerouslySetInnerHTML={{ __html: t('Committees.ProgramTableRow15Text2') }} />
                            <li dangerouslySetInnerHTML={{ __html: t('Committees.ProgramTableRow15Text3') }} />
                            <li dangerouslySetInnerHTML={{ __html: t('Committees.ProgramTableRow15Text4') }} />
                        </ul>

                        <ul className={classes.MarginTop2halfrem}>
                            <li dangerouslySetInnerHTML={{ __html: t('Committees.ProgramTableRow15Text5') }} />
                            <li dangerouslySetInnerHTML={{ __html: t('Committees.ProgramTableRow15Text6') }} />
                            <li dangerouslySetInnerHTML={{ __html: t('Committees.ProgramTableRow15Text7') }} />
                            <li dangerouslySetInnerHTML={{ __html: t('Committees.ProgramTableRow15Text8') }} />
                            <li dangerouslySetInnerHTML={{ __html: t('Committees.ProgramTableRow15Text9') }} />
                            <li dangerouslySetInnerHTML={{ __html: t('Committees.ProgramTableRow15Text10') }} />
                        </ul>
                    </td>
                </tr>

                <tr>
                    <td className={classes.ProgramTable__Row}>
                        <span className={classes.BoldText}>{t('Committees.ProgramTableRow16Col1')}</span>
                    </td>
                    <td className={[classes.ProgramTable__Row, classes.BoldText, classes.CenterText].join(' ')}>{t('Committees.LunchBreak')}</td>
                </tr>

                <tr>
                    <td className={classes.ProgramTable__Row}>
                        <div className={classes.BoldText}>{t('Committees.ProgramTableRow17Col1')}</div>

                        <div className={classes.BoldText}>{t('Committees.ProgramTableRow17Text1')}</div>
                    </td>
                    <td className={classes.ProgramTable__Row}>
                        <ul>
                            <li dangerouslySetInnerHTML={{ __html: t('Committees.ProgramTableRow17Text2') }} />
                            <li dangerouslySetInnerHTML={{ __html: t('Committees.ProgramTableRow17Text3') }} />
                        </ul>

                        <div className={classes.MarginTop2halfrem}>{t('Committees.OralPresentations')}</div>
                    </td>
                </tr>

                <tr>
                    <td className={classes.ProgramTable__Row}>
                        <span className={classes.BoldText}>{t('Committees.ProgramTableRow18Col1')}</span>
                    </td>
                    <td className={[classes.ProgramTable__Row, classes.BoldText, classes.CenterText].join(' ')}>{t('Committees.CoffeeBreak')}</td>
                </tr>

                <tr>
                    <td className={classes.ProgramTable__Row}>
                        <div className={classes.BoldText}>{t('Committees.ProgramTableRow19Col1')}</div>

                        <div className={classes.BoldText}>{t('Committees.ProgramTableRow19Text1')}</div>
                    </td>
                    <td className={classes.ProgramTable__Row}>
                        <ul>
                            <li dangerouslySetInnerHTML={{ __html: t('Committees.ProgramTableRow19Text2') }} />
                        </ul>

                        <div className={classes.MarginTop2halfrem}>{t('Committees.OralPresentations')}</div>
                    </td>
                </tr>

                <tr>
                    <td className={classes.ProgramTable__Row}>
                        <span className={classes.BoldText}>{t('Committees.ProgramTableRow20Col1')}</span>
                    </td>
                    <td className={[classes.ProgramTable__Row, classes.BoldText, classes.CenterText].join(' ')}>{t('Committees.CoffeeBreak')}</td>
                </tr>

                <tr>
                    <td className={classes.ProgramTable__Row}>
                        <div className={classes.BoldText}>{t('Committees.ProgramTableRow21Col1')}</div>

                        <div className={classes.BoldText}>{t('Committees.ProgramTableRow21Text1')}</div>
                    </td>
                    <td className={classes.ProgramTable__Row}>
                        <div>{t('Committees.OralPresentations')}</div>
                    </td>
                </tr>

                <tr>
                    <td className={classes.ProgramTable__Row}>
                        <span className={classes.RedText}>{t('Committees.ProgramTableDate4')}</span>
                    </td>
                    <td className={[classes.ProgramTable__Row, classes.BoldText, classes.CenterText].join(' ')}>{t('Committees.ProgramTableRow22Text1')}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default ProgramTable