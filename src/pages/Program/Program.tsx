import { useTranslation } from 'react-i18next';

import classes from './Program.module.scss';

const Program = () => {
    const { t, i18n } = useTranslation();

    const trTableImage = require('../../assets/images/program_table_tr.png');
    const enTableImage = require('../../assets/images/program_table_en.png');

    return (
        <div className={classes.Program}>
            <h2>{t('Program.ProgramTableTitle')}</h2>
            <h2>{t('Program.ProgramTableSubTitle')}</h2>

            {/* <ProgramTable /> */}
            <img alt="Program_Table_Image" src={i18n.language === "tr" ? trTableImage : enTableImage} />
        </div>
    )
}

export default Program;