import { useRef, useEffect, useCallback } from 'react';

import './Segment.scss';

interface SegmentPropsType {
    value: number
    label: string
}

const Segment = (props: SegmentPropsType) => {
    const { value, label } = props;
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
        const firstNumber = Math.floor(value / 10) || 0;
        const secondNumber = value % 10 || 0;

        updateTimeSegment(firstDigitRef.current as HTMLElement, firstNumber);
        updateTimeSegment(secondDigitRef.current as HTMLElement, secondNumber);

        return false;
    }, [value, updateTimeSegment]);

    useEffect(() => {
        updateTimeSection();
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
                <p className='label'>{label}</p>
            </div>
        </div>
    )
}

export default Segment