import React, { FC } from 'react';
import { FigureButtonProps } from './Button.types';
import styles from './Button.module.css';

const FigureButton: FC<FigureButtonProps> = ({ variant }) => {
    if (variant !== 'default') {
        return (
            <>
                <svg
                    className={styles.figure}
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
                <hr />
            </>
        );
    }

    return null;
};

export default FigureButton;
