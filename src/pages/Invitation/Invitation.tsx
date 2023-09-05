import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './Invitation.module.scss';
import ImageShowcase from '../../components/ImageShowcase/ImageShowcase';

const Invitation = () => {
    const { t } = useTranslation();

    const antet = require('../../assets/images/hbb_antet_tr.png');
    const nsSignature = require('../../assets/images/ns_signature.png');
    const sdtSignature = require('../../assets/images/sdt_signature.png');

    return (
        <div className={classes.Invitation}>
            <ImageShowcase
                imageUrl={antet}
                isOverlayed={false}
                alt='Antet'
            />

            <p dangerouslySetInnerHTML={{ __html: t('Invitation.Title') }} />
            <p dangerouslySetInnerHTML={{ __html: t('Invitation.Par1') }} />
            <p dangerouslySetInnerHTML={{ __html: t('Invitation.Par2') }} />
            <p dangerouslySetInnerHTML={{ __html: t('Invitation.Par3') }} />
            <p dangerouslySetInnerHTML={{ __html: t('Invitation.Par4') }} />

            <div className={classes.Invitation__Signature}>
                <div className={classes.Invitation__Signature__Agent}>
                    <ImageShowcase
                        imageUrl={nsSignature}
                        isOverlayed={false}
                        alt='ns-signature'
                    />
                    <p dangerouslySetInnerHTML={{ __html: t('Invitation.Sign1') }} />
                </div>

                <div className={classes.Invitation__Signature__Agent}>
                    <ImageShowcase
                        imageUrl={sdtSignature}
                        isOverlayed={false}
                        alt='sdt-signature'
                    />
                    <p dangerouslySetInnerHTML={{ __html: t('Invitation.Sign2') }} />
                </div>
            </div>

            <div className={classes.Invitation__Footer}>
                <p>Menekşe 2, No 35/19, Kızılay-Ankara</p>
                <a href="https://www.hayvanbesleme.org.tr ">https://www.hayvanbesleme.org.tr </a>
            </div>
        </div>
    )
}

export default Invitation