import React from 'react';
import Menu from '../components/Menu/Menu';
import Questions from '../components/Questions/Questions';
import data from '../data.json';
import styles from './Game.module.css';

const { questions } = data;

const Game = () => (
    <div className={styles.game}>
        <Questions questions={questions} />
        <Menu questions={questions} />
    </div>
);

export default Game;
