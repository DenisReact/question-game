import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuestionsProps } from './Questions.types';
import styles from './Questions.module.css';
import Button from '../Button/Button';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { returnMode, isRightAnswer } from './Questions.utils';
import {
    setBudget,
    incrementLevel,
    setLevelCount,
} from '../../Redux/gameSlice';
import FIRST_LETTERS from './Questions.constants';

const Questions: FC<QuestionsProps> = ({ questions }) => {
    const currentLevel = useAppSelector(state => state.game.currentLevel);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const currentQuestion = questions[currentLevel];
    const [showAnwers, setShowAnwers] = React.useState(false);
    const [activeAnwers, setActiveAnwers] = React.useState(-1);

    const handleClick = (index: number) => () => {
        setActiveAnwers(index);
        setTimeout(() => {
            setShowAnwers(true);
        }, 1000);
        setTimeout(() => {
            setActiveAnwers(-1);
            if (isRightAnswer(currentQuestion.rightAnswers, index)) {
                setShowAnwers(false);
                dispatch(setBudget(currentQuestion.cost));
                if (currentLevel < questions.length - 1) {
                    dispatch(incrementLevel());
                } else {
                    navigate('/finish');
                }
            } else {
                dispatch(setLevelCount(0));
                navigate('/finish');
            }
        }, 2000);
    };
    return (
        <div className={styles.questionsBlock}>
            <div className={styles.question}>
                <h3>{currentQuestion.title}</h3>
            </div>
            <div className={styles.answers}>
                {currentQuestion.answers.map((answer, index) => (
                    <Button
                        onAnswer={handleClick(index)}
                        key={`${index + 1}Answer`}
                        index={index}
                        variant="gaming"
                        mode={returnMode(
                            activeAnwers,
                            showAnwers,
                            currentQuestion.rightAnswers,
                            index
                        )}
                    >
                        <b className={styles.firstLatter}>
                            {FIRST_LETTERS[index]}
                        </b>{' '}
                        {answer}
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default Questions;
