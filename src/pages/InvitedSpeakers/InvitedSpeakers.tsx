import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './InvitedSpeakers.module.scss';
import SpeakerItem from './SpeakerItem/SpeakerItem';

const InvitedSpeakers = () => {
    const { i18n, t } = useTranslation();

    const muratUlkuPicture = require('../../assets/images/murat_karakus.png');
    const muhittinOzderPicture = require('../../assets/images/muhittin_ozder.png');
    const ismetTurkmenPicture = require('../../assets/images/ismet_turkmen.png');
    const farukOzbeyPicture = require('../../assets/images/faruk_ozbey.png');
    const ismailFilyaPicture = require('../../assets/images/ismail_filya.png');
    const birgerSvihusPicture = require('../../assets/images/birger_svihus.png');
    const yvesNysPicture = require('../../assets/images/yves_nys.png');
    const armaganHayirliPicture = require('../../assets/images/armagan_hayirli.png');
    const annaCatharinaBergePicture = require('../../assets/images/anna_catharina.png');
    const hidirGencogluPicture = require('../../assets/images/hidir_gencoglu.png');
    const melihYavuzPicture = require('../../assets/images/melih_yavuz.png');
    const muratGorguluPicture = require('../../assets/images/murat_gorgulu.png');
    const antonellaCannasPicture = require('../../assets/images/antonello_cannas.png');
    const RogerDavinPicture = require('../../assets/images/roger_davin.png');
    const alperOnencPicture = require('../../assets/images/alper_onenc.png');
    const ladineCelikPicture = require('../../assets/images/LadineCelk.png');
    const nataliaSoaresPicture = require('../../assets/images/NataliaSoares.png');

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
                    name={t("InvitedSpeakers.MuhittinOzer.Name")}
                    status={t("InvitedSpeakers.MuhittinOzer.Status")}
                    occupation={t("InvitedSpeakers.MuhittinOzer.Occupation")}
                    panel={t("InvitedSpeakers.MuhittinOzer.Panel")}
                    bio={t("InvitedSpeakers.MuhittinOzer.Bio")}
                    img={muhittinOzderPicture}
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
                    name={t("InvitedSpeakers.FarukOzbey.Name")}
                    status={t("InvitedSpeakers.FarukOzbey.Status")}
                    occupation={t("InvitedSpeakers.FarukOzbey.Occupation")}
                    panel={t("InvitedSpeakers.FarukOzbey.Panel")}
                    bio={t("InvitedSpeakers.FarukOzbey.Bio")}
                    img={farukOzbeyPicture}
                />

                <SpeakerItem
                    name={t("InvitedSpeakers.İsmailFilya.Name")}
                    status={t("InvitedSpeakers.İsmailFilya.Status")}
                    occupation={t("InvitedSpeakers.İsmailFilya.Occupation")}
                    panel={t("InvitedSpeakers.İsmailFilya.Panel")}
                    bio={t("InvitedSpeakers.İsmailFilya.Bio")}
                    img={ismailFilyaPicture}
                />

                <SpeakerItem
                    name={t("InvitedSpeakers.BirgerSvihus.Name")}
                    status={t("InvitedSpeakers.BirgerSvihus.Status")}
                    occupation={t("InvitedSpeakers.BirgerSvihus.Occupation")}
                    panel={t("InvitedSpeakers.BirgerSvihus.Panel")}
                    bio={t("InvitedSpeakers.BirgerSvihus.Bio")}
                    img={birgerSvihusPicture}
                    title={t("InvitedSpeakers.BirgerSvihus.Title")}
                />

                <SpeakerItem
                    name={t("InvitedSpeakers.YvesNys.Name")}
                    status={t("InvitedSpeakers.YvesNys.Status")}
                    occupation={t("InvitedSpeakers.YvesNys.Occupation")}
                    panel={t("InvitedSpeakers.YvesNys.Panel")}
                    bio={t("InvitedSpeakers.YvesNys.Bio")}
                    img={yvesNysPicture}
                    title={t("InvitedSpeakers.YvesNys.Title")}
                />

                <SpeakerItem
                    name={t("InvitedSpeakers.ArmaganHayirli.Name")}
                    status={t("InvitedSpeakers.ArmaganHayirli.Status")}
                    occupation={t("InvitedSpeakers.ArmaganHayirli.Occupation")}
                    panel={t("InvitedSpeakers.ArmaganHayirli.Panel")}
                    bio={t("InvitedSpeakers.ArmaganHayirli.Bio")}
                    img={armaganHayirliPicture}
                    title={t("InvitedSpeakers.ArmaganHayirli.Title")}
                />

                <SpeakerItem
                    name={t("InvitedSpeakers.AnnaCatharinaBerge.Name")}
                    status={t("InvitedSpeakers.AnnaCatharinaBerge.Status")}
                    occupation={t("InvitedSpeakers.AnnaCatharinaBerge.Occupation")}
                    panel={t("InvitedSpeakers.AnnaCatharinaBerge.Panel")}
                    bio={t("InvitedSpeakers.AnnaCatharinaBerge.Bio")}
                    img={annaCatharinaBergePicture}
                    title={t("InvitedSpeakers.AnnaCatharinaBerge.Title")}
                />

                <SpeakerItem
                    name={t("InvitedSpeakers.HidirGencoglu.Name")}
                    status={t("InvitedSpeakers.HidirGencoglu.Status")}
                    occupation={t("InvitedSpeakers.HidirGencoglu.Occupation")}
                    panel={t("InvitedSpeakers.HidirGencoglu.Panel")}
                    bio={t("InvitedSpeakers.HidirGencoglu.Bio")}
                    img={hidirGencogluPicture}
                    title={t("InvitedSpeakers.HidirGencoglu.Title")}
                />

                <SpeakerItem
                    name={t("InvitedSpeakers.MelihYavuz.Name")}
                    status={t("InvitedSpeakers.MelihYavuz.Status")}
                    occupation={t("InvitedSpeakers.MelihYavuz.Occupation")}
                    panel={t("InvitedSpeakers.MelihYavuz.Panel")}
                    bio={t("InvitedSpeakers.MelihYavuz.Bio")}
                    img={melihYavuzPicture}
                    title={t("InvitedSpeakers.MelihYavuz.Title")}
                />

                <SpeakerItem
                    name={t("InvitedSpeakers.MuratGorgulu.Name")}
                    status={t("InvitedSpeakers.MuratGorgulu.Status")}
                    occupation={t("InvitedSpeakers.MuratGorgulu.Occupation")}
                    panel={t("InvitedSpeakers.MuratGorgulu.Panel")}
                    bio={t("InvitedSpeakers.MuratGorgulu.Bio")}
                    img={muratGorguluPicture}
                    title={t("InvitedSpeakers.MuratGorgulu.Title")}
                />

                <SpeakerItem
                    name={t("InvitedSpeakers.AntonelloCannas.Name")}
                    status={t("InvitedSpeakers.AntonelloCannas.Status")}
                    occupation={t("InvitedSpeakers.AntonelloCannas.Occupation")}
                    panel={t("InvitedSpeakers.AntonelloCannas.Panel")}
                    bio={t("InvitedSpeakers.AntonelloCannas.Bio")}
                    img={antonellaCannasPicture}
                    title={t("InvitedSpeakers.AntonelloCannas.Title")}
                />

                <SpeakerItem
                    name={t("InvitedSpeakers.RogerDavin.Name")}
                    status={t("InvitedSpeakers.RogerDavin.Status")}
                    occupation={t("InvitedSpeakers.RogerDavin.Occupation")}
                    panel={t("InvitedSpeakers.RogerDavin.Panel")}
                    bio={t("InvitedSpeakers.RogerDavin.Bio")}
                    img={RogerDavinPicture}
                    title={t("InvitedSpeakers.RogerDavin.Title")}
                />

                <SpeakerItem
                    name={t("InvitedSpeakers.AlperOnenc.Name")}
                    status={t("InvitedSpeakers.AlperOnenc.Status")}
                    occupation={t("InvitedSpeakers.AlperOnenc.Occupation")}
                    panel={t("InvitedSpeakers.AlperOnenc.Panel")}
                    bio={t("InvitedSpeakers.AlperOnenc.Bio")}
                    img={alperOnencPicture}
                    title={t("InvitedSpeakers.AlperOnenc.Title")}
                />

                <SpeakerItem
                    name={t("InvitedSpeakers.LadineCelik.Name")}
                    status={t("InvitedSpeakers.LadineCelik.Status")}
                    occupation={t("InvitedSpeakers.LadineCelik.Occupation")}
                    panel={t("InvitedSpeakers.LadineCelik.Panel")}
                    bio={t("InvitedSpeakers.LadineCelik.Bio")}
                    img={ladineCelikPicture}
                    title={t("InvitedSpeakers.LadineCelik.Title")}
                />

                <SpeakerItem
                    name={t("InvitedSpeakers.NataliaSoares.Name")}
                    status={t("InvitedSpeakers.NataliaSoares.Status")}
                    occupation={t("InvitedSpeakers.NataliaSoares.Occupation")}
                    panel={t("InvitedSpeakers.NataliaSoares.Panel")}
                    bio={t("InvitedSpeakers.NataliaSoares.Bio")}
                    img={nataliaSoaresPicture}
                    title={t("InvitedSpeakers.NataliaSoares.Title")}
                />
            </div>  
        </div>
    )
}

export default InvitedSpeakers