import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import classes from './Showcase.module.scss';
import SponsorGroup from './SponsorGroup/SponsorGroup';

const Showcase = () => {
    const { t } = useTranslation();
    const [translateValue, setTranslateValue] = useState(0);
    const viewportRef = useRef<HTMLDivElement>(null);
    const showCaseSponsorsRef = useRef<HTMLDivElement>(null);
    const intervalRef = useRef<ReturnType<typeof setInterval>>();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTranslateValue(prevState => {
                // TODO revisit this
                if (prevState <= -3250) {
                    return 950;
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
                <h2>{t("Sponsors.Title")}</h2>
                {/* <button onClick={() => setTranslateValue(prevState => prevState - 150)}>PRESS ME</button> */}
            </header>
            <div className={classes.Showcase__Wrapper}>
                <div className={classes.Showcase__Viewport} ref={viewportRef} id="product-showcase-viewport">
                    <div className={classes.Showcase__Sponsors} ref={showCaseSponsorsRef} style={{ transform: `translateX(${translateValue}px)` }}>
                        <SponsorGroup />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Showcase;