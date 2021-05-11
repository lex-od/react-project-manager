import React, { useEffect, useState } from 'react';
import deleteBtn from '../../assets/icons/deleteBtnSprite.svg';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { AddButton, NewItemModal, NewProjectForm } from '../common';
import { projectsOps } from '../../redux/projects';
import { projectsSls } from '../../redux/projects';

import css from './Projects.module.scss';

const { getProjects } = projectsOps;
const { getAllProjects } = projectsSls;

const colors = ['#8C72DF', '#FF765F', '#71DF87'];

const ProjectsList = () => {
    const [isShowModal, setIsShowModal] = useState(false);

    const toggleModal = () => setIsShowModal(state => !state);

    const dispatch = useDispatch();
    const projects = useSelector(getAllProjects);
    useEffect(() => {
        dispatch(getProjects());
    }, [dispatch]);

    return (
        <div className={css.projectsContainer}>
            <h1 className={css.projectsTitle}>Проекти</h1>

            <AddButton onClick={toggleModal} />

            <ul className={css.projectsList}>
                {projects.map((project, index) => (
                    <li
                        className={css.projectsListItem}
                        key={project._id}
                        style={{ backgroundColor: colors[index % 3] }}
                    >
                        <Link to={`/projects/${project._id}`}>
                            <div className={css.projectsItemContainer}>
                                <h2 className={css.projectsListItemTitle}>
                                    {project.title}
                                </h2>
                                <p className={css.projectsListItemDescr}>
                                    {project.description}
                                </p>
                                <button type="button" className={css.deleteBtn}>
                                    <svg
                                        className={css.deleteBtnIcon}
                                        style={{ fill: colors[index % 3] }}
                                    >
                                        <use
                                            href={deleteBtn + '#icon-trash'}
                                        ></use>
                                    </svg>
                                </button>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>

            {isShowModal && (
                <NewItemModal title="Створення проекту" onClose={toggleModal}>
                    <NewProjectForm onClose={toggleModal} />
                </NewItemModal>
            )}
        </div>
    );
};

export default ProjectsList;
