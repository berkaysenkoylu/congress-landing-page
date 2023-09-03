import { useState, useRef, useEffect } from 'react';

import classes from './Clock.module.scss';

const Clock = () => {
    const [count, setCount] = useState(60);
    const [bottomCardValue, setBottomCardValue] = useState(count + 1);

    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        setInterval(() => {
            containerRef.current?.classList.remove('Clock_flip__q6bdS')
            void containerRef.current?.offsetWidth;
            containerRef.current?.classList.add('Clock_flip__q6bdS')
            setCount(prevState => prevState - 1)
            // console.log("AHOY")
            setBottomCardValue(prevState => prevState - 1);
        }, 1000);
    }, [containerRef]);

    // setTimeout(() => {
    //     setCount(prevState => prevState - 1)
    // }, 1000);



    return (
        <div className={classes.flipClock}>
            <span ref={containerRef} className={[classes.flipClock__piece, classes.flip].join(' ')}>
                <b className={classes.card}>
                    <b className={classes.card__top}>{count}</b>
                    <b className={classes.card__bottom} data-value={bottomCardValue}></b>
                    <b className={classes.card__back} data-value={bottomCardValue}>
                        <b className={classes.card__bottom} data-value={count}></b>
                    </b>
                </b>
                <span className={classes.flipClock__slot}>Days</span>
            </span>
        </div>
    )
}

export default Clock