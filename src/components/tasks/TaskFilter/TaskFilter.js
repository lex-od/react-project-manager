import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tasksActs, tasksSls } from '../../../redux/tasks';

import searchIcon from '../../../assets/icons/searchIcon.svg';
import styles from './TaskFilter.module.scss';

const { taskFilterAct } = tasksActs;

const { getFilter } = tasksSls;

export default function TaskFilter() {
    const dispatch = useDispatch();

    const taskFilterData = useSelector(getFilter);

    const changeFilter = useCallback(
        e => dispatch(taskFilterAct(e.target.value)),
        [dispatch],
    );

    return (
        <label className={styles.filteBlock}>
            {!taskFilterData && (
                <svg className={styles.nextDate}>
                    <use href={searchIcon + '#icon-search'}></use>
                </svg>
            )}
            <input
                type="text"
                value={taskFilterData}
                onChange={changeFilter}
                className={styles.filterInput}
            />
        </label>
    );
}
