import { Modes } from '../Button/Button.types';

export const isRightAnswer = (arr: number[], index: number): boolean => {
    if (arr.includes(index)) {
        return true;
    }
    return false;
};

export const returnMode = (
    activeAnswer: number,
    showAnswers: boolean,
    arr: number[],
    index: number
): Modes => {
    if (!showAnswers && activeAnswer === index) {
        return 'selected';
    }
    if (!showAnswers && activeAnswer !== index) {
        return 'inactive';
    }
    if (showAnswers && isRightAnswer(arr, index)) {
        return 'correct';
    }
    return 'wrong';
};
