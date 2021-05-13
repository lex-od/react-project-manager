import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../SprintsSideContent/SprintsSideContent.module.scss';

const colors = [
    '#8c72df',
    '#FF765F',
    '#71DF87',
    '#f78335',
    '#f3be2e',
    '#e46cde',
    '#4394f1',
    '#d45535',
    '#f10f9b',
];

export default function SprintSideCard({ project, index }) {
    return (
        <li className={styles.asideSprintsItem}>
            <NavLink
                className={styles.asideLink}
                to={`/projects/${project._id}`}
                activeClassName={styles.asideActiveLink}
            >
                <div
                    style={{ backgroundColor: colors[index % 9] }}
                    className={styles.asideSprintsIcon}
                ></div>
                <span className={styles.asideSprintsName}>{project.title}</span>
            </NavLink>
        </li>
    );
}
