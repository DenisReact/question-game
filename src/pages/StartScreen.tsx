import React from 'react';
import styles from './StartScreen.module.css';
import handSvg from '../imgs/Hand.svg';
import Button from '../components/Button/Button';

const StartScreen = () => (
    <main className={styles.startScreen}>
        <div className={styles.centerContent}>
            <img src={handSvg} alt="" />
            <div className={styles.text}>
                <h1>
                    Who wants to be <br /> a millionaire?
                </h1>
                <Button href="/game">Start</Button>
            </div>
        </div>
    </main>
);

export default StartScreen;
