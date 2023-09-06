import React, { useState, useRef } from 'react';

import classes from './Showcase.module.scss';
import SponsorGroup from './SponsorGroup/SponsorGroup';

const Showcase = () => {
    const [translateValue, setTranslateValue] = useState(0);
    const viewportRef = useRef<HTMLDivElement>(null);
    const showCaseSponsorsRef = useRef<HTMLDivElement>(null);

    console.log(showCaseSponsorsRef.current?.getBoundingClientRect().left)
    console.log(showCaseSponsorsRef.current?.scrollWidth)

    return (
        <section className={classes.Showcase}>
            <header className={classes.ShowcaseHeader}>
                <h2>Sponsors</h2>
                <button onClick={() => setTranslateValue(prevState => prevState - 200)}>PRESS ME</button>
            </header>
            <div className={classes.Showcase__Wrapper}>
                <div className={classes.Showcase__Viewport} ref={viewportRef}>
                    <div className={classes.Showcase__Sponsors} ref={showCaseSponsorsRef} style={{ transform: `translateX(${translateValue}px)`, transition: "transform 0.45s ease-out" }}>
                        <SponsorGroup />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Showcase;