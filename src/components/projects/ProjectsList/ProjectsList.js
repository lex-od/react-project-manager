// import React, { useEffect, useState } from 'react';
// import deleteBtn from '../../assets/icons/deleteBtnSprite.svg';

// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

// import { AddButton, NewItemModal, NewProjectForm } from '../common';
// import { projectsOps } from '../../redux/projects';
// import { projectsSls } from '../../redux/projects';

// import css from './Projects.module.scss';

// const { getProjects } = projectsOps;
// const { getAllProjects } = projectsSls;

// const colors = ['#8C72DF', '#FF765F', '#71DF87'];

// const ProjectsList = () => {
//     const [isShowModal, setIsShowModal] = useState(false);

//     const toggleModal = () => setIsShowModal(state => !state);

//     const dispatch = useDispatch();
//     const projects = useSelector(getAllProjects);
//     useEffect(() => {
//         dispatch(getProjects());
//     }, [dispatch]);

//     return (
//         <div className={css.projectsContainer}>
//             <h1 className={css.projectsTitle}>Проекти</h1>

//             <AddButton onClick={toggleModal} />
//             {/*
//             <ul className={css.projectsList}>
//                 {projects.map((project, index) => (
//                     <li
//                         className={css.projectsListItem}
//                         key={project._id}
//                         style={{ backgroundColor: colors[index % 3] }}
//                     >
//                         <Link to={`/projects/${project._id}`}>
//                             <div className={css.projectsItemContainer}>
//                                 <h2 className={css.projectsListItemTitle}>
//                                     {project.title}
//                                 </h2>
//                                 <p className={css.projectsListItemDescr}>
//                                     {project.description}
//                                 </p>
//                                 <button type="button" className={css.deleteBtn}>
//                                     <svg
//                                         className={css.deleteBtnIcon}
//                                         style={{ fill: colors[index % 3] }}
//                                     >
//                                         <use
//                                             href={deleteBtn + '#icon-trash'}
//                                         ></use>
//                                     </svg>
//                                 </button>
//                             </div>
//                         </Link>
//                     </li>
//                 ))}
//             </ul> */}

//             {isShowModal && (
//                 <NewItemModal title="Створення проекту" onClose={toggleModal}>
//                     <NewProjectForm onClose={toggleModal} />
//                 </NewItemModal>
//             )}
//         </div>
//     );
// };

// export default ProjectsList;

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';

import ProjectsListItem from '../ProjectsListItem/ProjectsListItem';

import { AddButton, NewItemModal, NewProjectForm } from '../../common';
import {
    projectsOps,
    projectsSls,
    projectsReducer,
} from '../../../redux/projects';

import styles from './Projects.module.scss';
import Loader from '../../common/Spinner/Spinner';

const { getProjects } = projectsOps;
const { getAllProjects } = projectsSls;

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
let currentColor = colors[0];
let idx = 0;

const getCurrentColor = () => {
    if (idx < colors.length) {
        currentColor = colors[idx];
        idx += 1;
        return currentColor;
    } else {
        currentColor = colors[0];
        idx = 0;
        return currentColor;
    }
};

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

                {!projects.length && !projectsReducer.loading ? (
                    <p className={styles.projectsNone}>
                        Ваша колекція проектів порожня, скористайтесь кнопкою
                        "Створити проект"
                    </p>
                ) : (
                    <div component="ul" className={styles.projectsList}>
                        {projects.map(project => (
                            <div
                                key={project._id}
                                timeout={200}
                                // classNames={popTransition}
                            >
                                <li
                                    className={styles.projectsListItem}
                                    id={project._id ? project._id : project.id}
                                    key={project._id}
                                    style={{
                                        backgroundColor: getCurrentColor(),
                                    }}
                                    onClick={onHandleClick}
                                >
                                    <ProjectsListItem
                                        {...project}
                                        color={currentColor}
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
                <div className="addProjectSection">
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

            {projectsReducer.loading && <Loader />}
        </>
    );
}
