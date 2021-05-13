import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { sprintsSls } from '../../../redux/sprints';

import { NewItemModal, NewSprintForm } from '../../common';
import AddButton from '../../common/addButton/AddButton';
import TaskSprintCard from '../TaskSprintCard/TaskSprintCard';

import styles from './TasksSideContent.module.scss';
import TaskLinkToSprint from '../TaskLinkToSprint/TaskLinkToSprint';

const { getAllSprints } = sprintsSls;

export default function TasksSideContent() {
    const [isShowSprintModal, setIsShowSprintModal] = useState(false);

    const toggleSprintModal = () => setIsShowSprintModal(state => !state);

    const sprints = useSelector(getAllSprints);

    return (
        <div className={styles.asideWrap}>
            <TaskLinkToSprint />

            <ul className={styles.asideSprintsList}>
                {sprints.length &&
                    sprints.map(sprint => (
                        <TaskSprintCard key={sprint._id} sprint={sprint} />
                    ))}
            </ul>
            <div className={styles.newSprintBlock}>
                <AddButton onClick={toggleSprintModal} />
                <span className={styles.newSprintText}>Створити спринт</span>
            </div>

            {isShowSprintModal && (
                <NewItemModal
                    title="Створення спринта"
                    onClose={toggleSprintModal}
                >
                    <NewSprintForm onClose={toggleSprintModal} />
                </NewItemModal>
            )}
        </div>
    );
}
