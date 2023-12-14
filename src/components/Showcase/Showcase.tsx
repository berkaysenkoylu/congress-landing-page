import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import classes from './Showcase.module.scss';
import SponsorGroup from './SponsorGroup/SponsorGroup';

const Showcase = () => {
    const { t } = useTranslation();
    const [translateValue, setTranslateValue] = useState(200);
    const showCaseSponsorsRef = useRef<HTMLDivElement>(null);
    const sponsorsRef = useRef<HTMLDivElement>(null);
    const intervalRef = useRef<ReturnType<typeof setInterval>>();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            let breakpoint = (sponsorsRef.current?.getBoundingClientRect().width ?
                sponsorsRef.current?.getBoundingClientRect().width : 2450) * -1;

            setTranslateValue(prevState => {
                if (prevState <= breakpoint) {
                    let offset = 950;
                    if (showCaseSponsorsRef.current) {
                        offset = showCaseSponsorsRef.current.getBoundingClientRect().width + 30
                    }

                    return offset;
                } else {
                    return prevState - 1;
                }
            });
        }, 10);

        return () => {
            clearInterval(intervalRef.current);
        }
    }, []);

    return (
        <section className={classes.Showcase}>
            <header className={classes.ShowcaseHeader}>
                <h2>{t("FrontPageSlider.Title")}</h2>
                {/* <button onClick={() => setTranslateValue(prevState => prevState - 150)}>PRESS ME</button> */}
            </header>
            <div className={classes.Showcase__Wrapper}>
                <div className={classes.Showcase__Viewport} id="product-showcase-viewport">
                    <div className={classes.Showcase__Sponsors} ref={showCaseSponsorsRef} style={{ transform: `translateX(${translateValue}px)` }}>
                        <SponsorGroup ref={sponsorsRef} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Showcase;