import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';

import ProjectsListItem from '../ProjectsListItem/ProjectsListItem';

import { AddButton, NewItemModal, NewProjectForm } from '../../common';
import { projectsOps, projectsSls } from '../../../redux/projects';

import styles from './Projects.module.scss';

const { getProjects } = projectsOps;
const { getAllProjects, getLoading } = projectsSls;

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

export default function ProjectsPage() {
    const [isShowModal, setIsShowModal] = useState(false);
    const toggleModal = () => setIsShowModal(state => !state);
    const history = useHistory();
    const dispatch = useDispatch();
    const match = useRouteMatch();

    useEffect(() => {
        dispatch(getProjects());
    }, [dispatch]);

    const onHandleClick = e => {
        const isDelete = e.target.closest('[data-process="delete"]');
        if (isDelete) {
            return;
        } else {
            history.push(`${match.url}/${e.currentTarget.id}`);
        }
    };
    const projects = useSelector(getAllProjects);

    return (
        <>
            <div className={styles.projectsContainer}>
                <h2 className={styles.title}>Проекти</h2>

                {!projects.length && !getLoading ? (
                    <p className={styles.projectsNone}>
                        Ваша колекція проектів порожня, скористайтесь кнопкою
                        "Створити проект"
                    </p>
                ) : (
                    <div component="ul" className={styles.projectsList}>
                        {projects.map((project, index) => (
                            <div key={project._id} timeout={200}>
                                <li
                                    className={styles.projectsListItem}
                                    id={project._id ? project._id : project.id}
                                    key={project._id}
                                    style={{
                                        backgroundColor: colors[index % 9],
                                    }}
                                    onClick={onHandleClick}
                                >
                                    <ProjectsListItem
                                        {...project}
                                        color={colors[index % 9]}
                                    >
                                        <span
                                            className={
                                                styles.projectDescription
                                            }
                                        >
                                            {project.description}
                                        </span>
                                    </ProjectsListItem>
                                </li>
                            </div>
                        ))}
                    </div>
                )}
                <div>
                    <AddButton
                        type="button"
                        className={styles.btnAdd}
                        onClick={toggleModal}
                    >
                        <p className={styles.btnAddIcon}>+</p>
                    </AddButton>
                    <p className={styles.addProjectText}>Створити проект</p>
                </div>

                {isShowModal && (
                    <NewItemModal
                        title="Створення проекту"
                        onClose={toggleModal}
                    >
                        <NewProjectForm onClose={toggleModal} />
                    </NewItemModal>
                )}
            </div>
        </>
    );
}
