import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { projectsSls } from '../../../redux/projects';
import { sprintsSls } from '../../../redux/sprints';
import SprintCard from '../SprintCard/SprintCard';
import SprintProjectTitle from '../SprintProjectTitle/SprintProjectTitle';
import AddButton from '../../common/addButton/AddButton';
import { NewItemModal, NewMemberForm, NewSprintForm } from '../../common';

import styles from './SprintsContent.module.scss';
import spriteAddPeople from '../../../assets/icons/addPeople.svg';

const { getAllProjects } = projectsSls;
const { getAllSprints, getLoading } = sprintsSls;

export default function SprintsContent() {
    const [isShowSprintModal, setIsShowSprintModal] = useState(false);
    const [isShowMembersModal, setIsShowMembersModal] = useState(false);

    const toggleSprintModal = () => setIsShowSprintModal(state => !state);
    const toggleMembersModal = () => setIsShowMembersModal(state => !state);

    const { projectId } = useParams();
    const projects = useSelector(getAllProjects);
    const loading = useSelector(getLoading);
    const [actualProject, setactualProject] = useState(null);

    useEffect(() => {
        projectId &&
            projects.length > 0 &&
            setactualProject(
                projects.find(project => project._id === projectId),
            );
    }, [projectId, projects]);

    const sprints = useSelector(getAllSprints);
    // console.log(sprints);

    return (
        <div className={styles.wrap}>
            <div className={styles.addButtonWrap}>
                <AddButton
                    className={styles.addButton}
                    onClick={toggleSprintModal}
                />
                <span className={styles.addButtonText}>Створити спринт</span>
            </div>
            <SprintProjectTitle project={actualProject} />
            <div className={styles.sprintDescription}>
                <p className={styles.sprintDescriptionText}>
                    {actualProject?.description}
                </p>
            </div>

            <div className={styles.addPeopleWrap}>
                <svg className={styles.addPeopleSvg}>
                    <use href={spriteAddPeople + '#icon-addPeople'}></use>
                </svg>
                <button
                    onClick={toggleMembersModal}
                    type="button"
                    className={styles.addPeopleBtn}
                >
                    Додати людей
                </button>
            </div>
            <ul className={styles.sprintsList}>
                {sprints.length || loading ? (
                    sprints.map(sprint => (
                        <li key={sprint._id} className={styles.sprintCard}>
                            <SprintCard
                                key={sprint._id}
                                sprint={sprint}
                                pathname={`/projects/${projectId}/sprints/${sprint._id}`}
                            />
                        </li>
                    ))
                ) : (
                    <span>
                        Ваша колекція спринтів порожня, скористайтесь кнопкою
                        "Створити спринт"
                    </span>
                )}
            </ul>

            {isShowSprintModal && (
                <NewItemModal
                    title="Створення спринта"
                    onClose={toggleSprintModal}
                >
                    <NewSprintForm onClose={toggleSprintModal} />
                </NewItemModal>
            )}

            {isShowMembersModal && (
                <NewItemModal title="Додати людей" onClose={toggleMembersModal}>
                    <NewMemberForm />
                </NewItemModal>
            )}
        </div>
    );
}
