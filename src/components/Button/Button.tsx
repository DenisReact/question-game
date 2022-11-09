import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ButtonProps, WrapperButtonProps } from './Button.types';
import styles from './Button.module.css';
import FigureButton from './FigureButton';

const WrapperButton: FC<WrapperButtonProps> = ({ href, children, mode }) => {
    if (href) {
        return (
            <Link className={mode} to={href}>
                {children}
            </Link>
        );
    }

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
};

const Button: FC<ButtonProps> = ({
    children,
    style,
    className,
    variant = 'default',
    href,
    mode = 'inactive',
    title,
    onAnswer,
    index,
    onClick,
}) => {
    const handleClick = (
        e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
    ) => {
        if (onAnswer && index !== undefined) {
            onAnswer(index);
        }
        if (onClick) {
            onClick(e);
        }
    };
    return (
        <WrapperButton mode={mode} href={href}>
            <button
                title={title}
                className={`${styles.button} ${styles[variant]} ${styles[mode]} ${className}`}
                disabled={mode === 'disabled'}
                style={style}
                type="button"
                onClick={e => handleClick(e)}
            >
                <span>{children}</span>
                <FigureButton variant={variant} />
            </button>
        </WrapperButton>
    );
};

export default Button;
