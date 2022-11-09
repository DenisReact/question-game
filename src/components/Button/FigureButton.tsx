import React, { FC } from 'react';
import { FigureButtonProps } from './Button.types';
import styles from './Button.module.css';

const FigureButton: FC<FigureButtonProps> = ({ variant }) => (
    <>
        {variant === 'gaming' && (
            <svg
                className={styles.figure}
                width="519"
                height="97"
                viewBox="0 0 519 97"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M44.2627 1.33335H474.604C479.431 1.33335 483.976 3.60597 486.871 7.46744L517.767 48.6667L486.871 89.8659C483.976 93.7274 479.431 96 474.604 96H44.2627C39.4361 96 34.8912 93.7274 31.9955 89.8659L1.10002 48.6667L31.9955 7.46745C34.8912 3.60598 39.4361 1.33335 44.2627 1.33335Z"
                    fill="white"
                    stroke="#D0D0D8"
                    strokeWidth="1.33333"
                />
            </svg>
        )}
        {variant === 'money' && (
            <svg
                width="321"
                height="54"
                viewBox="0 0 321 54"
                fill="none"
                className={styles.figure}
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M29.9831 1.33329H290.551C295.101 1.33329 299.417 3.35458 302.33 6.85046L319.399 27.3333L302.33 47.8161C299.417 51.312 295.101 53.3333 290.551 53.3333H29.9831C25.4324 53.3333 21.1169 51.312 18.2037 47.8161L1.13465 27.3333L18.2037 6.85047C21.1169 3.35458 25.4324 1.33329 29.9831 1.33329Z"
                    fill="white"
                    stroke="#D0D0D8"
                    strokeWidth="1.33333"
                />
            </svg>
        )}
    </>
);

export default FigureButton;
