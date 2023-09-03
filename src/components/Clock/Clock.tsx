import { useState, useRef, useEffect, useCallback } from 'react';

import './Clock.scss';

const Clock = () => {
    const [count, setCount] = useState(60);

    const countdownRef = useRef<ReturnType<typeof setInterval>>();
    const firstDigitRef = useRef<HTMLDivElement>(null);
    const secondDigitRef = useRef<HTMLDivElement>(null);

    const getTimeSegmentElements = (segmentElement: HTMLElement) => {
        const segmentDisplay = segmentElement?.querySelector(
            '.segment-display'
        );
        const segmentDisplayTop = segmentDisplay?.querySelector(
            '.segment-display__top'
        );
        const segmentDisplayBottom = segmentDisplay?.querySelector(
            '.segment-display__bottom'
        );
      
        const segmentOverlay = segmentDisplay?.querySelector(
            '.segment-overlay'
        );
        const segmentOverlayTop = segmentOverlay?.querySelector(
            '.segment-overlay__top'
        );
        const segmentOverlayBottom = segmentOverlay?.querySelector(
            '.segment-overlay__bottom'
        );
      
        return {
          segmentDisplayTop,
          segmentDisplayBottom,
          segmentOverlay,
          segmentOverlayTop,
          segmentOverlayBottom,
        };
    }

    const updateTimeSegment = useCallback((segmentElement: HTMLElement, timeValue: number) => {
        const {
            segmentDisplayTop,
            segmentDisplayBottom,
            segmentOverlay,
            segmentOverlayTop,
            segmentOverlayBottom,
        } = getTimeSegmentElements(segmentElement);

        if (parseInt((segmentDisplayTop?.textContent as string), 10) === timeValue) {
            return;
        }

        segmentOverlay?.classList.add('flip');

        if (segmentDisplayTop && segmentOverlayBottom) {
            segmentDisplayTop.textContent = timeValue.toString();
            segmentOverlayBottom.textContent = timeValue.toString();
        }

        function finishAnimation(this: any) {
            segmentOverlay?.classList.remove('flip');

            if (segmentDisplayBottom && segmentOverlayTop) {
                segmentDisplayBottom.textContent = timeValue.toString();
                segmentOverlayTop.textContent = timeValue.toString();
            }
        
            this.removeEventListener(
              'animationend',
              finishAnimation
            );
          }

          segmentOverlay?.addEventListener(
            'animationend',
            finishAnimation
          );
    }, [])

    const updateTimeSection = useCallback(() => {
        const firstNumber = Math.floor(count / 10) || 0;
        const secondNumber = count % 10 || 0;

        updateTimeSegment(firstDigitRef.current as HTMLElement, firstNumber);
        updateTimeSegment(secondDigitRef.current as HTMLElement, secondNumber);

        return false;
    }, [count, updateTimeSegment]);

    useEffect(() => {
        countdownRef.current = setInterval(() => {
            const isComplete = updateTimeSection();

            if (isComplete) {
                clearInterval(countdownRef.current);
            }

            setCount(prevState => prevState - 1);
        }, 1000);

        return () => {
            clearInterval(countdownRef.current);
        }
    }, [updateTimeSection]);

    return (
        <div className="countdown">
            <div className="time-section" id="hours">
                <div className="time-group">
                    <div className="time-segment" ref={firstDigitRef}>
                        <div className="segment-display">
                            <div className="segment-display__top"></div>
                            <div className="segment-display__bottom"></div>
                            <div className="segment-overlay">
                                <div className="segment-overlay__top"></div>
                                <div className="segment-overlay__bottom"></div>
                            </div>
                        </div>
                    </div>
                    <div className="time-segment" ref={secondDigitRef}>
                        <div className="segment-display">
                            <div className="segment-display__top"></div>
                            <div className="segment-display__bottom"></div>
                            <div className="segment-overlay">
                                <div className="segment-overlay__top"></div>
                                <div className="segment-overlay__bottom"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                <p>Hours</p>
            </div>
        </div>
    )
}

export default Clock