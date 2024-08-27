import { useEffect, useState } from "react";
import styles from './stopwatch.module.scss';


export const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;

        if (isActive) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive]);

    const startStopwatch = () => setIsActive(true);
    const stopStopwatch = () => setIsActive(false);
    const resetStopwatch = () => {
        setTime(0);
        setIsActive(false);
    };

    return (
        <div className={styles.stopwatch}>
            <h1 className={styles.title}>Stopwatch</h1>
            <div className={styles.timedisplay}>
                {new Date(time * 1000).toISOString().slice(11, 19)}
            </div>
            <div className={styles.buttons}>
                <button onClick={startStopwatch} className={`${styles.button} ${styles.startButton}`}>Start</button>
                <button onClick={stopStopwatch} className={`${styles.button} ${styles.stopButton}`}>Stop</button>
                <button onClick={resetStopwatch} className={`${styles.button} ${styles.resetButton}`}>Reset</button>
            </div>
        </div>
    );
};