import React, { FC } from 'react';
import { useAppSelector } from '../../hooks/redux';
import Button from '../Button/Button';
import styles from './Menu.module.css';
import { MenuProps } from './Menu.types';
import returnModeForStage from './Menu.utils';

const Menu: FC<MenuProps> = ({ questions }) => {
    const currentLevel = useAppSelector(state => state.game.currentLevel);
    const [showMobileMenu, setShowMobileMenu] = React.useState(false);
    const changeVisibilityMenu = () => setShowMobileMenu(!showMobileMenu);

    const currentClass = showMobileMenu && styles.active;

    return (
        <>
            <button
                type="button"
                onClick={changeVisibilityMenu}
                className={`${styles.menuButton} ${currentClass}`}
            >
                <div className={styles.bar1} />
                <div className={styles.bar2} />
                <div className={styles.bar3} />
            </button>
            <div className={`${styles.menu} ${currentClass}`}>
                <div className={styles.list}>
                    {questions.map((question, index) => (
                        <Button
                            key={`${index + 1}Stage`}
                            className={styles.stageButton}
                            variant="money"
                            mode={returnModeForStage(currentLevel, index)}
                            title={question.cost}
                        >
                            {question.cost}
                        </Button>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Menu;
