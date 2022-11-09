import React from 'react';
import Button from '../components/Button/Button';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setBudget, setLevelCount } from '../Redux/gameSlice';
import styles from './Start.module.css';
import classes from './Finish.module.css';
import handSvg from '../imgs/Hand.svg';

const Finish = () => {
    const dispatch = useAppDispatch();
    const currentBudget = useAppSelector(state => state.game.currentBudget);
    const handleClick = () => {
        dispatch(setBudget('0'));
        dispatch(setLevelCount(0));
    };
    return (
        <main className={`${styles.startScreen} ${classes.finishScreen}`}>
            <div className={styles.centerContent}>
                <img src={handSvg} alt="" />
                <div className={styles.text}>
                    <h3>Total score:</h3>
                    <h1>{currentBudget} earned</h1>
                    <Button
                        onClick={() => handleClick()}
                        className={classes.tryAgain}
                        href="/game"
                    >
                        Try again
                    </Button>
                </div>
            </div>
        </main>
    );
};

export default Finish;
