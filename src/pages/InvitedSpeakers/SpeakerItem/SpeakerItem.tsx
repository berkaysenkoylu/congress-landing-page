import React from 'react';

import classes from './SpeakerItem.module.scss';

const SpeakerItem = () => {
    const defaultImage = require('../../../assets/images/murat_karakus.png');

    return (
        <div className={classes.SpeakerItem}>
            <div className={classes.SpeakerItem__Profile}>
                <figure>
                    <img alt="test" src={defaultImage} />
                    <figcaption>
                        <p>Murat Ülkü KARAKUŞ</p>
                        <p>Moderator</p>
                        <p>Türkiye Yem Sanayicileri Birliği Başkanı</p>
                    </figcaption>
                </figure>
            </div>
            <div className={classes.SpeakerItem__Info}>
                <div>
                    <h2>Panel</h2>
                    <p>KIRMIZI ET VE SÜT ÜRETIMINDE MEVCUT SORUNLAR ILE ÇÖZÜM ÖNERILERI</p>
                </div>
                <div>
                    <h2>BIO</h2>
                    <p>1984 yılında Atatürk Üniversitesi Ziraat Fakültesi Zootekni bölümünden mezun olmuştur. Sonrasında Turhal’da bir yem fabrikasında fabrika müdürü olarak görev yapmıştır. 1986 yılından itibaren 10 yıl boyunca Roche Müstahzarları San. A.Ş.’de çalıştıktan sonra, bu görevinden ayrılarak kendi şirketini kurmuştur.  Ankara’da yem fabrikası, tavukçuluk tesisleri ve büyükbaş hayvan çiftlikleri bulunan Karakuş, ayrıca yem hammaddeleri ticareti ile uğraşmaktadır. 1997–1998 yıllarında Türk Ziraat Yüksek Mühendisleri Birliği Yönetim Kurulu üyeliği yapmış ve 1998 yılından bu yana Türkiye Yem Sanayicileri Birliği Yönetim Kurulu Başkanlığı görevini sürdürmektedir.  Ayrıca, 2016 yılından itibaren Ankara Ticaret Odası Yönetim Kurulu Sayman Üyeliği ve 2020 yılından itibaren TOBB Türkiye Tarım Meclisi Başkanlığı görevlerini yürütmektedir. 30 yılı aşkın meslek hayatında, sektörü ile ilgili ulusal ve uluslararası toplantı, kongre ve fuarlarda organizasyon komitesi başkanı, konuşmacı ve moderatör olarak katılmıştır.</p>
                </div>
            </div>
        </div>
    )
}

export default SpeakerItem;