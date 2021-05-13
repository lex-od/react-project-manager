import React from 'react';
import { Link, useParams } from 'react-router-dom';

import spriteGoBack from '../../../../assets/icons/goBackArrow.svg';

import styles from '../../SprintsSideContent/SprintsSideContent.module.scss';

export default function SprintLinkToProject() {
    const { projectId } = useParams();
    return (
        <div className={styles.asideBack}>
            <Link to={'/projects'} className={styles.backLinkMobile}>
                <button type="button" className={styles.asideBackButton}>
                    <svg className={styles.backSvg}>
                        <use href={spriteGoBack + '#icon-goBack'}></use>
                    </svg>
                    <span className={styles.asideBackText}>
                        Показати проекти
                    </span>
                </button>
            </Link>
        </div>
    );
}
