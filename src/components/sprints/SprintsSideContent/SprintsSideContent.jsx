import styles from './SprintsSideContent.module.scss';
import spriteGoBack from '../../../assets/icons/goBackArrow.svg';
import { useState } from 'react';
import AddButton from '../../common/addButton/AddButton';
import { NewItemModal, NewProjectForm } from '../../common';

export default function SprintsContent() {
    const [isShowProjectModal, setIsShowProjectModal] = useState(false);

    const toggleProjectModal = () => setIsShowProjectModal(state => !state);

    return (
        <div className={styles.asideWrap}>
            <AddButton onClick={toggleProjectModal} />

            <div className={styles.asideBack}>
                <svg className={styles.backSvg}>
                    <use href={spriteGoBack + '#icon-goBack'}></use>
                </svg>
                <span className={styles.asideBackText}>Показати проекти</span>
            </div>
            <ul className={styles.asideSprintsList}>
                <li className={styles.asideSprintsItem}>
                    <div className={styles.asideSprintsIcon}></div>
                    <span className={styles.asideSprintsName}>Project 1</span>
                </li>
            </ul>

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
