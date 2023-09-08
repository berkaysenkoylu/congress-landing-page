import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './InvitedSpeakers.module.scss';
import SpeakerItem from './SpeakerItem/SpeakerItem';

const InvitedSpeakers = () => {
    const { i18n, t } = useTranslation();

    const muratUlkuPicture = require('../../assets/images/murat_karakus.png');
    const ismetTurkmenPicture = require('../../assets/images/ismet_turkmen.png');
    const birgerSvihusPicture = require('../../assets/images/birger_svihus.png');

    const currentLanguage = i18n.language;

    return (
        <div className={classes.InvitedSpeakers}>
            <h2>{t("InvitedSpeakers.Title").toLocaleUpperCase(currentLanguage === 'en' ? 'en-US': 'tr-TR')}</h2>

            <div>
                <SpeakerItem
                    name={t("InvitedSpeakers.MuratUlku.Name")}
                    status={t("InvitedSpeakers.MuratUlku.Status")}
                    occupation={t("InvitedSpeakers.MuratUlku.Occupation")}
                    panel={t("InvitedSpeakers.MuratUlku.Panel")}
                    bio={t("InvitedSpeakers.MuratUlku.Bio")}
                    img={muratUlkuPicture}
                />

                <SpeakerItem
                    name={t("InvitedSpeakers.NumanAkman.Name")}
                    status={t("InvitedSpeakers.NumanAkman.Status")}
                    occupation={t("InvitedSpeakers.NumanAkman.Occupation")}
                    panel={t("InvitedSpeakers.NumanAkman.Panel")}
                    bio={t("InvitedSpeakers.NumanAkman.Bio")}
                />

                <SpeakerItem
                    name={t("InvitedSpeakers.İsmetTurkmen.Name")}
                    status={t("InvitedSpeakers.İsmetTurkmen.Status")}
                    occupation={t("InvitedSpeakers.İsmetTurkmen.Occupation")}
                    panel={t("InvitedSpeakers.İsmetTurkmen.Panel")}
                    bio={t("InvitedSpeakers.İsmetTurkmen.Bio")}
                    img={ismetTurkmenPicture}
                />

                <SpeakerItem
                    name={t("InvitedSpeakers.İsmailFilya.Name")}
                    status={t("InvitedSpeakers.İsmailFilya.Status")}
                    occupation={t("InvitedSpeakers.İsmailFilya.Occupation")}
                    panel={t("InvitedSpeakers.İsmailFilya.Panel")}
                    bio={t("InvitedSpeakers.İsmailFilya.Bio")}
                />

                <SpeakerItem
                    name={t("InvitedSpeakers.NahitYazıcıoğlu.Name")}
                    status={t("InvitedSpeakers.NahitYazıcıoğlu.Status")}
                    occupation={t("InvitedSpeakers.NahitYazıcıoğlu.Occupation")}
                    panel={t("InvitedSpeakers.NahitYazıcıoğlu.Panel")}
                    bio={t("InvitedSpeakers.NahitYazıcıoğlu.Bio")}
                />

                <SpeakerItem
                    name={t("InvitedSpeakers.BirgerSvihus.Name")}
                    status={t("InvitedSpeakers.BirgerSvihus.Status")}
                    occupation={t("InvitedSpeakers.BirgerSvihus.Occupation")}
                    panel={t("InvitedSpeakers.BirgerSvihus.Panel")}
                    bio={t("InvitedSpeakers.BirgerSvihus.Bio")}
                    img={birgerSvihusPicture}
                />
            </div>  
        </div>
    )
}

export default InvitedSpeakers