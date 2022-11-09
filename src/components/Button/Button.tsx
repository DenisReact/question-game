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
}) => (
    <WrapperButton mode={mode} href={href}>
        <button
            className={`${styles.button} ${styles[variant]} ${styles[mode]} ${className}`}
            disabled={mode === 'disabled'}
            style={style}
            type="button"
        >
            <span>{children}</span>
            <FigureButton variant={variant} />
            {(variant === 'money' || variant === 'gaming') && <hr />}
        </button>
    </WrapperButton>
);

export default Button;
