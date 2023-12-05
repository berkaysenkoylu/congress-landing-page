import { useTranslation } from 'react-i18next';

import classes from './ProgramTable.module.scss';

const ProgramTable = () => {
    const { t } = useTranslation();

    return (
        <table className={classes.ProgramTable}>
            <thead>
                <tr>
                    <td className={classes.ProgramTable__Row} colSpan={2}>
                        <h3>{t('Program.ProgramTableTitle')}</h3>

                        <h3><i>{t('Program.ProgramTableSubTitle')}</i></h3>
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className={classes.ProgramTable__Row}>
                        <div className={classes.RedText}>{t('Program.ProgramTableDate1')}</div>
                        <div className={classes.BoldText}>{t('Program.ProgramTableRow1Text2')}</div>
                    </td>
                    <td className={classes.ProgramTable__Row}>
                        <div className={classes.BoldText}>{t('Program.ProgramTableRow1Text1')}</div>
                        <div>{t('Program.ProgramTableRow1Text3')}</div>
                    </td>
                </tr>

                <tr>
                    <td className={classes.ProgramTable__Row}>
                        <span className={classes.RedText}>{t('Program.ProgramTableDate2')}</span>
                    </td>
                    <td></td>
                </tr>

                <tr>
                    <td className={classes.ProgramTable__Row}>
                        <span className={classes.BoldText}>{t('Program.ProgramTableRow3Col1')}</span>
                    </td>
                    <td className={classes.ProgramTable__Row}>{t('Program.ProgramTableRow3Col2')}</td>
                </tr>

                <tr>
                    <td className={classes.ProgramTable__Row}>
                        <div className={classes.BoldText}>{t('Program.ProgramTableRow4Text1')}</div>

                        <div className={classes.BoldText}>{t('Program.ProgramTableRow4Text2')}</div>
                    </td>
                    <td className={classes.ProgramTable__Row}>
                        <div>{t('Program.ProgramTableRow4Text3')}</div>

                        <ul>
                            <li dangerouslySetInnerHTML={{ __html: t('Program.ProgramTableRow4Text4') }} />
                            <li dangerouslySetInnerHTML={{ __html: t('Program.ProgramTableRow4Text5') }} />
                            <li dangerouslySetInnerHTML={{ __html: t('Program.ProgramTableRow4Text6') }} />
                            <li dangerouslySetInnerHTML={{ __html: t('Program.ProgramTableRow4Text7') }} />
                            <li dangerouslySetInnerHTML={{ __html: t('Program.ProgramTableRow4Text8') }} />
                        </ul>
                    </td>
                </tr>

                <tr>
                    <td className={classes.ProgramTable__Row}>
                        <span className={classes.BoldText}>{t('Program.ProgramTableRow5Col1')}</span>
                    </td>
                    <td className={[classes.ProgramTable__Row, classes.BoldText, classes.CenterText].join(' ')}>{t('Program.CoffeeBreak')}</td>
                </tr>

                <tr>
                    <td className={classes.ProgramTable__Row}>
                        <div className={classes.BoldText}>{t('Program.ProgramTableRow6Col1')}</div>

                        <div className={classes.BoldText}>{t('Program.RuminantNutrition').replace('#', "1")}</div>
                    </td>
                    <td className={classes.ProgramTable__Row}>
                        <ul>
                            <li dangerouslySetInnerHTML={{ __html: t('Program.ProgramTableRow6Text1') }} />
                            <li dangerouslySetInnerHTML={{ __html: t('Program.ProgramTableRow6Text2') }} />
                        </ul>

                        <div className={classes.MarginTop2halfrem}>{t('Program.OralPresentations')}</div>
                    </td>
                </tr>

                <tr>
                    <td className={classes.ProgramTable__Row}>
                        <span className={classes.BoldText}>{t('Program.ProgramTableRow7Col1')}</span>
                    </td>
                    <td className={[classes.ProgramTable__Row, classes.BoldText, classes.CenterText].join(' ')}>{t('Program.LunchBreak')}</td>
                </tr>

                <tr>
                    <td className={classes.ProgramTable__Row}>
                        <div className={classes.BoldText}>{t('Program.ProgramTableRow8Col1')}</div>

                        <div className={classes.BoldText}>{t('Program.RuminantNutrition').replace('#', "2")}</div>
                    </td>
                    <td className={classes.ProgramTable__Row}>
                        <ul>
                            <li dangerouslySetInnerHTML={{ __html: t('Program.ProgramTableRow8Text1') }} />
                            <li dangerouslySetInnerHTML={{ __html: t('Program.ProgramTableRow8Text2') }} />
                        </ul>

                        <div className={classes.MarginTop2halfrem}>{t('Program.OralPresentations')}</div>
                    </td>
                </tr>

                <tr>
                    <td className={classes.ProgramTable__Row}>
                        <span className={classes.BoldText}>{t('Program.ProgramTableRow9Col1')}</span>
                    </td>
                    <td className={[classes.ProgramTable__Row, classes.BoldText, classes.CenterText].join(' ')}>{t('Program.CoffeeBreak')}</td>
                </tr>

                <tr>
                    <td className={classes.ProgramTable__Row}>
                        <div className={classes.BoldText}>{t('Program.ProgramTableRow10Col1')}</div>

                        <div className={classes.BoldText}>{t('Program.RuminantNutrition').replace('#', "3")}</div>
                    </td>
                    <td className={classes.ProgramTable__Row}>
                        <ul>
                            <li dangerouslySetInnerHTML={{ __html: t('Program.ProgramTableRow10Text1') }} />
                            <li dangerouslySetInnerHTML={{ __html: t('Program.ProgramTableRow10Text2') }} />
                        </ul>

                        <div className={classes.MarginTop2halfrem}>{t('Program.OralPresentations')}</div>
                    </td>
                </tr>

                <tr>
                    <td className={classes.ProgramTable__Row}>
                        <span className={classes.BoldText}>{t('Program.ProgramTableRow11Col1')}</span>
                    </td>
                    <td></td>
                </tr>

                <tr>
                    <td className={classes.ProgramTable__Row}>
                        <div className={classes.BoldText}>{t('Program.ProgramTableRow12Col1')}</div>

                        <div className={classes.BoldText}>{t('Program.ProgramTableRow12Text1')}</div>
                    </td>
                    <td className={classes.ProgramTable__Row}>
                        <ul>
                            <li dangerouslySetInnerHTML={{ __html: t('Program.ProgramTableRow12Text2') }} />
                        </ul>
                    </td>
                </tr>

                <tr>
                    <td className={classes.ProgramTable__Row}>
                        <span className={classes.RedText}>{t('Program.ProgramTableDate3')}</span>
                    </td>
                    <td></td>
                </tr>

                <tr>
                    <td className={classes.ProgramTable__Row}>
                        <div className={classes.BoldText}>{t('Program.ProgramTableRow13Col1')}</div>

                        <div className={classes.BoldText}>{t('Program.ProgramTableRow13Text1')}</div>
                    </td>
                    <td className={classes.ProgramTable__Row}>
                        <ul>
                            <li dangerouslySetInnerHTML={{ __html: t('Program.ProgramTableRow13Text2') }} />
                            <li dangerouslySetInnerHTML={{ __html: t('Program.ProgramTableRow13Text3') }} />
                            <li dangerouslySetInnerHTML={{ __html: t('Program.ProgramTableRow13Text4') }} />
                            <li dangerouslySetInnerHTML={{ __html: t('Program.ProgramTableRow13Text5') }} />
                            <li dangerouslySetInnerHTML={{ __html: t('Program.ProgramTableRow13Text6') }} />
                        </ul>

                        <div className={classes.MarginTop2halfrem} dangerouslySetInnerHTML={{ __html: t('Program.ProgramTableRow13Text7') }}/>
                    </td>
                </tr>

                <tr>
                    <td className={classes.ProgramTable__Row}>
                        <span className={classes.BoldText}>{t('Program.ProgramTableRow14Col1')}</span>
                    </td>
                    <td className={[classes.ProgramTable__Row, classes.BoldText, classes.CenterText].join(' ')}>{t('Program.CoffeeBreak')}</td>
                </tr>

                <tr>
                    <td className={classes.ProgramTable__Row}>
                        <div className={classes.BoldText}>{t('Program.ProgramTableRow15Col1')}</div>

                        <div className={classes.BoldText}>{t('Program.ProgramTableRow15Text1')}</div>
                    </td>
                    <td className={classes.ProgramTable__Row}>
                        <ul>
                            <li dangerouslySetInnerHTML={{ __html: t('Program.ProgramTableRow15Text2') }} />
                            <li dangerouslySetInnerHTML={{ __html: t('Program.ProgramTableRow15Text3') }} />
                            <li dangerouslySetInnerHTML={{ __html: t('Program.ProgramTableRow15Text4') }} />
                        </ul>

                        <ul className={classes.MarginTop2halfrem}>
                            <li dangerouslySetInnerHTML={{ __html: t('Program.ProgramTableRow15Text5') }} />
                            <li dangerouslySetInnerHTML={{ __html: t('Program.ProgramTableRow15Text6') }} />
                            <li dangerouslySetInnerHTML={{ __html: t('Program.ProgramTableRow15Text7') }} />
                            <li dangerouslySetInnerHTML={{ __html: t('Program.ProgramTableRow15Text8') }} />
                            <li dangerouslySetInnerHTML={{ __html: t('Program.ProgramTableRow15Text9') }} />
                            <li dangerouslySetInnerHTML={{ __html: t('Program.ProgramTableRow15Text10') }} />
                        </ul>
                    </td>
                </tr>

                <tr>
                    <td className={classes.ProgramTable__Row}>
                        <span className={classes.BoldText}>{t('Program.ProgramTableRow16Col1')}</span>
                    </td>
                    <td className={[classes.ProgramTable__Row, classes.BoldText, classes.CenterText].join(' ')}>{t('Program.LunchBreak')}</td>
                </tr>

                <tr>
                    <td className={classes.ProgramTable__Row}>
                        <div className={classes.BoldText}>{t('Program.ProgramTableRow17Col1')}</div>

                        <div className={classes.BoldText}>{t('Program.ProgramTableRow17Text1')}</div>
                    </td>
                    <td className={classes.ProgramTable__Row}>
                        <ul>
                            <li dangerouslySetInnerHTML={{ __html: t('Program.ProgramTableRow17Text2') }} />
                            <li dangerouslySetInnerHTML={{ __html: t('Program.ProgramTableRow17Text3') }} />
                        </ul>

                        <div className={classes.MarginTop2halfrem}>{t('Program.OralPresentations')}</div>
                    </td>
                </tr>

                <tr>
                    <td className={classes.ProgramTable__Row}>
                        <span className={classes.BoldText}>{t('Program.ProgramTableRow18Col1')}</span>
                    </td>
                    <td className={[classes.ProgramTable__Row, classes.BoldText, classes.CenterText].join(' ')}>{t('Program.CoffeeBreak')}</td>
                </tr>

                <tr>
                    <td className={classes.ProgramTable__Row}>
                        <div className={classes.BoldText}>{t('Program.ProgramTableRow19Col1')}</div>

                        <div className={classes.BoldText}>{t('Program.ProgramTableRow19Text1')}</div>
                    </td>
                    <td className={classes.ProgramTable__Row}>
                        <ul>
                            <li dangerouslySetInnerHTML={{ __html: t('Program.ProgramTableRow19Text2') }} />

                            <li dangerouslySetInnerHTML={{ __html: t('Program.ProgramTableRow19Text3') }} />

                            <li dangerouslySetInnerHTML={{ __html: t('Program.ProgramTableRow19Text4') }} />
                        </ul>

                        <div className={classes.MarginTop2halfrem}>{t('Program.OralPresentations')}</div>
                    </td>
                </tr>

                <tr>
                    <td className={classes.ProgramTable__Row}>
                        <span className={classes.BoldText}>{t('Program.ProgramTableRow20Col1')}</span>
                    </td>
                    <td className={[classes.ProgramTable__Row, classes.BoldText, classes.CenterText].join(' ')}>{t('Program.CoffeeBreak')}</td>
                </tr>

                <tr>
                    <td className={classes.ProgramTable__Row}>
                        <div className={classes.BoldText}>{t('Program.ProgramTableRow21Col1')}</div>

                        <div className={classes.BoldText}>{t('Program.ProgramTableRow21Text1')}</div>
                    </td>
                    <td className={classes.ProgramTable__Row}>
                        <div>{t('Program.OralPresentations')}</div>
                    </td>
                </tr>

                <tr>
                    <td className={classes.ProgramTable__Row}>
                        <span className={classes.RedText}>{t('Program.ProgramTableDate4')}</span>
                    </td>
                    <td className={[classes.ProgramTable__Row, classes.BoldText, classes.CenterText].join(' ')}>{t('Program.ProgramTableRow22Text1')}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default ProgramTable