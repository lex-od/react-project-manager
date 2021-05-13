import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { sprintsOps } from '../../../redux/sprints';

import styles from '../SprintsContent/SprintsContent.module.scss';
import spriteDelete from '../../../assets/icons/sprintsDelete.svg';

const { sprintDeletedOperation } = sprintsOps;

const monthes = [
    'Січ',
    'Лют',
    'Бер',
    'Кві',
    'Тра',
    'Чер',
    'Лип',
    'Сер',
    'Вер',
    'Жов',
    'Лис',
    'Гру',
];

export default function SprintCard({ sprint, pathname }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const deleteSprint = () => {
        dispatch(sprintDeletedOperation(sprint._id));
    };

    const handleGoToCard = event => {
        console.log(event);
        const { nodeName } = event.target;
        if (nodeName === 'BUTTON' || nodeName === 'use') return;
        history.push(pathname);
    };

    return (
        // className={styles.sprintCardWrap}
        <>
            <div onClick={handleGoToCard}>
                <h2 className={styles.sprintCardHead}>{sprint.title}</h2>
                <div className={styles.sprintItem}>
                    <span className={styles.sprintItemText}>Дата початку</span>
                    <span className={styles.sprintItemDate}>
                        {new Date(sprint.startDate).getDate() +
                            ' ' +
                            monthes[new Date(sprint.startDate).getMonth()]}
                    </span>
                </div>
                <div className={styles.sprintItem}>
                    <span className={styles.sprintItemText}>
                        Дата закінченя
                    </span>
                    <span className={styles.sprintItemDate}>
                        {new Date(sprint.endDate).getDate() +
                            ' ' +
                            monthes[new Date(sprint.endDate).getMonth()]}
                    </span>
                </div>
                <div className={styles.sprintItem}>
                    <span className={styles.sprintItemText}>Тривалість</span>
                    <span className={styles.sprintItemDate}>
                        {sprint.duration}
                    </span>
                </div>
                <button className={styles.deleteBtn} onClick={deleteSprint}>
                    <svg className={styles.deleteSvg}>
                        <use href={spriteDelete + '#icon-delete'}></use>
                    </svg>
                </button>
            </div>
        </>
    );
}
