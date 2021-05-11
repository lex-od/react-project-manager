import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { tasksOps } from '../../../redux/tasks';

import spriteDelete from '../../../assets/icons/sprintsDelete.svg';

import styles from './TasksCard.module.scss';

const { taskChangetOperation, taskDeletetOperation } = tasksOps;

export default function TaskCard({ date, task }) {
    console.log(date);
    const { sprintId } = useParams();

    const actualDay = task.hoursWastedPerDay.find(day => {
        if (day.currentDay === date) return day;
    });

    console.log(actualDay);

    const [hours, setHours] = useState(actualDay.singleHoursWasted);

    const dispatch = useDispatch();

    const changeData = e => {
        const { value } = e.target;

        setHours(value);
    };

    const setchangeData = e => {
        const newData = {
            date,
            hours: e.target.value,
        };

        dispatch(taskChangetOperation(newData, task._id));
    };

    const deleteTask = () => {
        dispatch(taskDeletetOperation(task._id));
    };

    return (
        <li className={styles.sprintCard}>
            <span className={styles.sprintCardHead}>{task.title}</span>

            <ul>
                <li className={styles.sprintItem}>
                    <span className={styles.sprintItemText}>
                        Заплановано годин
                    </span>
                    <span className={styles.sprintItemText}>
                        {task.hoursPlanned}
                    </span>
                </li>
                <li className={styles.sprintItem}>
                    <span className={styles.sprintItemText}>
                        Витрачено год / день
                    </span>
                    <input
                        type="text"
                        name="currentHours"
                        value={hours}
                        onChange={changeData}
                        onBlur={setchangeData}
                        className={styles.sprintItemText}
                    />
                </li>
                <li className={styles.sprintItem}>
                    <span className={styles.sprintItemText}>
                        Витрачено годин
                    </span>
                    <span className={styles.sprintItemText}>
                        {task.hoursWasted}
                    </span>
                </li>
            </ul>
            <button onClick={deleteTask}>
                <svg className={styles.deleteSvg}>
                    <use href={spriteDelete + '#icon-delete'}></use>
                </svg>
            </button>
            {/* <svg></svg> */}
        </li>
    );
}
