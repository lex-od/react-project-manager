import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

import styles from './TaskSprintCard.module.scss';

export default function TaskSprintCard({ sprint }) {
    const { projectId } = useParams();
    return (
        <li className={styles.asideSprintsItem}>
            <NavLink
                to={`/projects/${projectId}/sprints/${sprint._id}`}
                className={styles.asideLink}
                activeClassName={styles.asideActiveLink}
            >
                <div className={styles.asideSprintsIcon}></div>
                <span className={styles.asideSprintsName}>{sprint.title}</span>
            </NavLink>
        </li>
    );
}
