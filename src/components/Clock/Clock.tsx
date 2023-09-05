import { useState, useEffect, useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import classes from './Clock.module.scss';
import Segment from './Segment/Segment';

const TARGET_DATE = '2024-02-29';

interface TimeRemainingType {
    seconds: number
    minutes: number
    hours: number
    days: number
    months: number
}

const Clock = () => {
    const { t } = useTranslation();
    const [timeRemaining, setTimeRemaining] = useState<TimeRemainingType>();
    const countdownRef = useRef<ReturnType<typeof setInterval>>();
    const getTimeRemaining = useCallback(() => {
        const targetDateTime = (new Date(TARGET_DATE)).getTime();
        const nowTime = Date.now();
        const complete = nowTime >= targetDateTime;
        
        if (complete) {
            return {
                complete,
                seconds: 0,
                minutes: 0,
                hours: 0,
                days: 0,
                months: 0
            };
        }
        
        const secondsRemaining = Math.floor(
            (targetDateTime - nowTime) / 1000
        );
        const months = Math.floor(secondsRemaining / 60 / 60 / 24 / 30);
        const days = Math.floor(secondsRemaining / 60 / 60 / 24) % 30;
        const hours = Math.floor(secondsRemaining / 60 / 60) % 24;
        const minutes =
            (Math.floor(secondsRemaining / 60) - hours * 60) % 60;
        const seconds = secondsRemaining % 60;
        
        return {
            complete,
            seconds,
            minutes,
            hours,
            days,
            months
        };
    }, []);

    useEffect(() => {
        const {
            seconds,
            minutes,
            hours,
            days,
            months
        } = getTimeRemaining();

        setTimeRemaining({
            seconds,
            minutes,
            hours,
            days,
            months
        });
    }, [getTimeRemaining]);

    useEffect(() => {
        countdownRef.current = setInterval(() => {
            const {
                seconds,
                minutes,
                hours,
                days,
                months
            } = getTimeRemaining();

            setTimeRemaining({
                seconds,
                minutes,
                hours,
                days,
                months
            });
        }, 1000);
    }, [getTimeRemaining]);

    return (
        <div className={classes.Clock}>
            <Segment
                label={t('Home.MonthText')}
                value={timeRemaining?.months as number}
            />
            <Segment
                label={t('Home.DayText')}
                value={timeRemaining?.days as number}
            />
            <Segment
                label={t('Home.HourText')}
                value={timeRemaining?.hours as number}
            />
            <Segment
                label={t('Home.MinuteText')}
                value={timeRemaining?.minutes as number}
            />
            <Segment
                label={t('Home.SecondText')}
                value={timeRemaining?.seconds as number}
            />
        </div>
    )
}

export default Clock