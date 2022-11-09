import { ReactNode } from 'react';

export interface WrapperButtonProps {
    children: ReactNode;
    href?: string;
    mode?: 'inactive' | 'selected' | 'correct' | 'wrong' | 'disabled';
}

export interface FigureButtonProps {
    variant?: 'gaming' | 'default' | 'money';
}

export interface ButtonProps extends WrapperButtonProps, FigureButtonProps {
    style?: React.CSSProperties;
    className?: string;
}
