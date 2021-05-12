import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { projectsSls } from '../../../redux/projects';
import { sprintsSls, sprintsOps } from '../../../redux/sprints';
import SprintCard from '../SprintCard/SprintCard';
import SprintProjectTitle from '../SprintProjectTitle/SprintProjectTitle';
import AddButton from '../../common/addButton/AddButton';
import { NewItemModal, NewMemberForm, NewSprintForm } from '../../common';

import styles from './SprintsContent.module.scss';
import spriteSearch from '../../../assets/icons/searchIcon.svg';
import spriteText from '../../../assets/icons/sprintsText.svg';
import spriteDelete from '../../../assets/icons/sprintsDelete.svg';
import spriteAddPeople from '../../../assets/icons/addPeople.svg';

const { getAllProjects } = projectsSls;
const { getAllSprints } = sprintsSls;
const { sprintGetOperation } = sprintsOps;

export default function SprintsContent() {
    const [isShowSprintModal, setIsShowSprintModal] = useState(false);
    const [isShowMembersModal, setIsShowMembersModal] = useState(false);

    const toggleSprintModal = () => setIsShowSprintModal(state => !state);
    const toggleMembersModal = () => setIsShowMembersModal(state => !state);

    const { projectId } = useParams();
    const projects = useSelector(getAllProjects);
    const [actualProject, setactualProject] = useState(null);
    // console.log(projectId);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(sprintGetOperation(projectId));
        projectId &&
            projects.length > 0 &&
            setactualProject(
                projects.find(project => project._id === projectId),
            );
    }, [dispatch, projectId, projects]);

    const sprints = useSelector(getAllSprints);
    // console.log(sprints);

    return (
        <div className={styles.wrap}>
            <AddButton onClick={toggleSprintModal} />
            <SprintProjectTitle project={actualProject} />
            <div className={styles.sprintDescription}>
                <p className={styles.sprintDescriptionText}>
                    Короткий опис проекту, якщо він є, розміщуєтсья тут. Ширина
                    тектового блоку
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
                {sprints.length &&
                    sprints.map(sprint => (
                        <li className={styles.sprintCard} key={sprint._id}>
                            <Link to={`/sprints/${sprint._id}`}>
                                <SprintCard sprint={sprint} />
                            </Link>
                        </li>
                    ))}
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
