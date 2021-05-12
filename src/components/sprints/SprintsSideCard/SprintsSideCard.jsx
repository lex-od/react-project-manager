import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from '../SprintsSideContent/SprintsSideContent.module.scss';

const colors = ['#8C72DF', '#FF765F', '#71DF87'];

export default function SprintSideCard({ project, index }) {
    const { projectId } = useParams();

    return (
        <li className={styles.asideSprintsItem}>
            <Link to={`/projects/${projectId}`}>
                <div
                    style={{ backgroundColor: colors[index % 3] }}
                    className={styles.asideSprintsIcon}
                ></div>
                <span className={styles.asideSprintsName}>{project.title}</span>
            </Link>
        </li>
    );
}
