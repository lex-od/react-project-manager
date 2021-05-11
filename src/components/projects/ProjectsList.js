import React, { useEffect } from 'react';
import deleteBtn from '../../assets/icons/deleteBtnSprite.svg';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { projectsOps } from '../../redux/projects';
import { projectsSls } from '../../redux/projects';

import css from './Projects.module.scss';

const { getProjects } = projectsOps;
const { getAllProjects } = projectsSls;

const colors = [
    '#8C72DF',
    '#FF765F',
    '#71DF87'
];

const ProjectsList = () => {
    const dispatch = useDispatch();
    const projects = useSelector(getAllProjects);
    useEffect(() => {
        dispatch(getProjects());
    }, [dispatch]);

    return (
        <div className={css.projectsContainer}>
            <h1 className={css.projectsTitle}>Проекти</h1>
            <ul className={css.projectsList}>
                {projects.map((project, index) => (
                    <li className={css.projectsListItem} key={project._id} style={{ backgroundColor: colors[index % 3] }}>
                        <Link to={`/projects/${project._id}`}>
                            <div className={css.projectsItemContainer}>
                                <h2 className={css.projectsListItemTitle}>
                                    {project.title}
                                </h2>
                                <p className={css.projectsListItemDescr}>
                                    {project.description}
                                </p>
                                <button type="button" className={css.deleteBtn}>
                                    <svg className={css.deleteBtnIcon}>
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
        </div>
    );
};

export default ProjectsList;
