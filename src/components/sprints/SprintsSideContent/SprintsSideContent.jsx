import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { projectsSls, projectsOps } from '../../../redux/projects';
import AddButton from '../../common/addButton/AddButton';
import { NewItemModal, NewProjectForm } from '../../common';
import spriteGoBack from '../../../assets/icons/goBackArrow.svg';
import styles from './SprintsSideContent.module.scss';
import SprintSideCard from '../SprintsSideCard/SprintsSideCard';

const { getAllProjects } = projectsSls;
const { getProjects } = projectsOps;

export default function SprintsContent() {
    const [isShowProjectModal, setIsShowProjectModal] = useState(false);

    const toggleProjectModal = () => setIsShowProjectModal(state => !state);

    const dispatch = useDispatch();
    const { projectId } = useParams();

    useEffect(() => {
        dispatch(getProjects(projectId));
    }, [dispatch, projectId]);

    const projects = useSelector(getAllProjects);

    return (
        <div className={styles.asideWrap}>
            <div className={styles.asideBack}>
                <button type="button" className={styles.asideBackButton}>
                    <svg className={styles.backSvg}>
                        <use href={spriteGoBack + '#icon-goBack'}></use>
                    </svg>
                    <span className={styles.asideBackText}>
                        Показати проекти
                    </span>
                </button>
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
