import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { sprintsOps } from '../../../redux/sprints';

import styles from '../SprintsContent/SprintsContent.module.scss';
import spriteDelete from '../../../assets/icons/sprintsDelete.svg';

const { sprintChangedOperation, sprintDeletedOperation } = sprintsOps;

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

export default function SprintCard({ sprint }) {
    const dispatch = useDispatch();
    const deleteSprint = () => {
        dispatch(sprintDeletedOperation(sprint._id));
    };

    // const moment = moment(sprint.endDate);

    return (
        <>
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
                <span className={styles.sprintItemText}>Дата закінченя</span>
                <span className={styles.sprintItemDate}>
                    {new Date(sprint.endDate).getDate() +
                        ' ' +
                        monthes[new Date(sprint.endDate).getMonth()]}
                </span>
            </div>
            <div className={styles.sprintItem}>
                <span className={styles.sprintItemText}>Тривалість</span>
                <span className={styles.sprintItemDate}>{sprint.duration}</span>
            </div>
            <button className={styles.deleteBtn} onClick={deleteSprint}>
                <svg className={styles.deleteSvg}>
                    <use href={spriteDelete + '#icon-delete'}></use>
                </svg>
            </button>
        </>
    );
}
