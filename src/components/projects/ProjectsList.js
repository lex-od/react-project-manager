import React from 'react';
import projects from './data';
import deleteBtn from '../../assets/icons/deleteBtnSprite.svg';
import css from './Projects.module.scss';

const colors = [
    '#8C72DF',
    '#FF765F',
    '#71DF87'
];

const ProjectsList = () => {
    return (
        <div className={css.projectsContainer}>
            <h1 className={css.projectsTitle}>Проекти</h1>
            <ul className={css.projectsList}>
                {projects.map((project, index) => (
                    <li className={css.projectsListItem} key={project._id} style={{ backgroundColor: colors[index % 3] }}>
                        <div className={css.projectsItemContainer}>
                            <h2 className={css.projectsListItemTitle}>
                                {project.title}
                            </h2>
                            <p className={css.projectsListItemDescr}>
                                {project.description}
                            </p>
                            <button type='button' className={css.deleteBtn}>
                                <svg className={css.deleteBtnIcon} style={{ fill: colors[index % 3] }}>
                                    <use href={deleteBtn + '#icon-trash'}></use>
                                </svg>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectsList;
