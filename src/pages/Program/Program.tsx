import { useTranslation } from 'react-i18next';

import classes from './Program.module.scss';
import ProgramTable from './ProgramTable/ProgramTable';

const Program = () => {
    const { t } = useTranslation();

    return (
        <div className={classes.Program}>
            <h2>{t('Program.Title')}</h2>

            <ProgramTable />
        </div>
    )
}

export default Program;