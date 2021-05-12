import React from 'react';
import { Link, useParams } from 'react-router-dom';

import spriteGoBack from '../../../assets/icons/goBackArrow.svg';

import styles from './TaskLinkToSprint.module.scss';

export default function TaskLinkToSprint() {
    const { projectId } = useParams();
    return (
        <div className={styles.asideBack}>
            <Link to={`/projects/${projectId}`} className={styles.backLink}>
                <svg className={styles.backSvg}>
                    <use href={spriteGoBack + '#icon-goBack'}></use>
                </svg>
                <span className={styles.asideBackText}>Показати спринти</span>
            </Link>
        </div>
    );
}
