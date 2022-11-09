import { ReactNode } from 'react';

export type Modes = 'inactive' | 'selected' | 'correct' | 'wrong' | 'disabled';

export interface WrapperButtonProps {
    children: ReactNode;
    href?: string;
    mode?: Modes;
}

export interface FigureButtonProps {
    variant?: 'gaming' | 'default' | 'money';
}

export interface ButtonProps extends WrapperButtonProps, FigureButtonProps {
    style?: React.CSSProperties;
    className?: string;
    title?: string;
    onAnswer?: (index: number) => void;
    index?: number;
}
