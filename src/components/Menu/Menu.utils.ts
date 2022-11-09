import { Modes } from '../Button/Button.types';

const returnModeForStage = (currentLevel: number, index: number): Modes => {
    if (currentLevel > index) {
        return 'disabled';
    }
    if (currentLevel === index) {
        return 'selected';
    }

    return 'inactive';
};

export default returnModeForStage;
