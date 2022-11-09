import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => (
    <div className={styles.container}>
        <h1 className={styles.title}>
            Page not found, please return to the <Link to="/">home page</Link>
        </h1>
    </div>
);

export default NotFound;
