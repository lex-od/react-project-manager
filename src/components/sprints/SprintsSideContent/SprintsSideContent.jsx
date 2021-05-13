import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { projectsSls } from '../../../redux/projects';
import AddButton from '../../common/addButton/AddButton';
import { NewItemModal, NewProjectForm } from '../../common';
import spriteGoBack from '../../../assets/icons/goBackArrow.svg';
import styles from './SprintsSideContent.module.scss';
import SprintSideCard from '../SprintsSideCard/SprintsSideCard';

const { getAllProjects } = projectsSls;

export default function SprintsContent() {
    const [isShowProjectModal, setIsShowProjectModal] = useState(false);

    const toggleProjectModal = () => setIsShowProjectModal(state => !state);

    const projects = useSelector(getAllProjects);

    return (
        <div className={styles.asideWrap}>
            <div className={styles.asideBack}>
                <Link to={'/projects'} className={styles.backLink}>
                    <button type="button" className={styles.asideBackButton}>
                        <svg className={styles.backSvg}>
                            <use href={spriteGoBack + '#icon-goBack'}></use>
                        </svg>
                        <span className={styles.asideBackText}>
                            Показати проекти
                        </span>
                    </button>
                </Link>
            </div>
            <ul className={styles.asideSprintsList}>
                {projects.length &&
                    projects.map((project, index) => (
                        <SprintSideCard
                            key={project._id}
                            project={project}
                            index={index}
                        />
                    ))}
            </ul>
            <div className={styles.asideAddButtonWrap}>
                <AddButton
                    className={styles.asideAddButton}
                    onClick={toggleProjectModal}
                />
                <span className={styles.newProjectText}>Створити проект</span>
            </div>

            {isShowProjectModal && (
                <NewItemModal
                    title="Створення проекту"
                    onClose={toggleProjectModal}
                >
                    <NewProjectForm onClose={toggleProjectModal} />
                </NewItemModal>
            )}
        </div>
    );
}
