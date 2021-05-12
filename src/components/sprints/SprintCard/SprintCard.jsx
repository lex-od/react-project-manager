import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { sprintsOps } from '../../../redux/sprints';

import styles from '../SprintsContent/SprintsContent.module.scss';
import spriteDelete from '../../../assets/icons/sprintsDelete.svg';

const { sprintChangedOperation, sprintDeletedOperation } = sprintsOps;

export default function SprintCard({ sprint }) {
    const dispatch = useDispatch();
    const deleteSprint = () => {
        dispatch(sprintDeletedOperation(sprint._id));
    };
    return (
        <>
            <h2 className={styles.sprintCardHead}>{sprint.title}</h2>
            <div className={styles.sprintItem}>
                <span className={styles.sprintItemText}>Дата початку</span>
                <span className={styles.sprintItemText}>
                    {sprint.startDate}
                </span>
            </div>
            <div className={styles.sprintItem}>
                <span className={styles.sprintItemText}>Дата закінченя</span>
                <span className={styles.sprintItemText}>{sprint.endDate}</span>
            </div>
            <div className={styles.sprintItem}>
                <span className={styles.sprintItemText}>Тривалість</span>
                <span className={styles.sprintItemText}>{sprint.duration}</span>
            </div>
            <button onClick={deleteSprint}>delete</button>
            <svg className={styles.deleteSvg}>
                <use href={spriteDelete + '#icon-delete'}></use>
            </svg>
        </>
    );
}
