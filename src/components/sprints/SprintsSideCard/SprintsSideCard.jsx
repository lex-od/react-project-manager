import React from 'react';
import { Link, useParams } from 'react-router-dom';
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
];

export default function SprintSideCard({ project, index }) {
    const { projectId } = useParams();

    return (
        <li className={styles.asideSprintsItem}>
            <Link className={styles.asideLink} to={`/projects/${project._id}`}>
                <div
                    style={{ backgroundColor: colors[index % 3] }}
                    className={styles.asideSprintsIcon}
                ></div>
                <span className={styles.asideSprintsName}>{project.title}</span>
            </Link>
        </li>
    );
}
