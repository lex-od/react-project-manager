import React from 'react';
import { useDispatch } from 'react-redux';
import { projectsOps } from '../../../redux/projects';
import deleteBtn from '../../../assets/icons/deleteBtnSprite.svg';
import styles from './ProjectsListItem.module.scss';

export default function ProjectsPageItem({ _id, title, color, children }) {
    const dispatch = useDispatch();

    const onDeleteProject = e => {
        dispatch(projectsOps.deleteProject(_id));
    };

    return (
        <>
            <div className={styles.projectInfo}>
                <h4 className={styles.projectTitle}>{title}</h4>
                <p className={styles.projectDescription}>{children}</p>
                <button
                    type="button"
                    className={styles.btnDelete}
                    onClick={onDeleteProject}
                    data-process="delete"
                >
                    <svg
                        className={styles.btnDeleteIcon}
                        style={{ fill: color }}
                    >
                        <use href={deleteBtn + '#icon-trash'} />
                    </svg>
                </button>
            </div>
        </>
    );
}
