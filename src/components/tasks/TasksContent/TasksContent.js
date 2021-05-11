import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { tasksSls, tasksOps } from '../../../redux/tasks';
import { sprintsSls } from '../../../redux/sprints';
import TaskCard from '../TaskCard/TaskCard';

import AddButton from '../../common/addButton/AddButton';

import spriteText from '../../../assets/icons/sprintsText.svg';

import styles from './TasksContent.module.scss';

const { getAllTasks } = tasksSls;
const { taskGetOperation, taskAddOperation } = tasksOps;
const { getAllSprints } = sprintsSls;

export default function TasksContent() {
    const { sprintId } = useParams();

    const dispatch = useDispatch();

    const tasks = useSelector(getAllTasks);
    const sprints = useSelector(getAllSprints);
    const actualSprint = () => sprints.find(sprint => sprint._id === sprintId);
    const activeDate = '';

    useEffect(() => {
        dispatch(taskGetOperation(sprintId));
        // const actualSprint = sprints.find(sprint => sprint._id === sprintId);
        // activeDate = actualSprint.startDate;
    }, [dispatch, sprintId]);

    const incrDate = () => {
        activeDate = Date.parse(actualSprint().startDate) + 1000 * 60 * 60 * 24;
    };

    const decrDate = () => {
        activeDate = Date.parse(actualSprint().startDate) - 1000 * 60 * 60 * 24;
    };

    //временное решение. удалить при создании модалки
    const newTask = {
        title: 'Task 4',
        hoursPlanned: 3,
    };

    //временное решение. заменить на модалку
    const addNewTask = () => {
        dispatch(taskAddOperation(newTask, sprintId));
    };

    return (
        <div className={styles.wrap}>
            <AddButton onClick={addNewTask} />
            {sprints.length && (
                <div>
                    <button onClick={incrDate}>+ день</button>
                    <button onClick={decrDate}>- день</button>
                    <div>
                        День проекта
                        {(Date.parse(actualSprint().startDate) -
                            Date.parse(actualSprint().startDate)) /
                            1000 /
                            60 /
                            60 /
                            24 +
                            1}
                    </div>
                    <div>
                        Длительность проекта
                        {(Date.parse(actualSprint().endDate) -
                            Date.parse(actualSprint().startDate)) /
                            1000 /
                            60 /
                            60 /
                            24 +
                            1}
                    </div>

                    <span>Дата {actualSprint().startDate} </span>
                    <div className={styles.sprintHead}>
                        <h1 className={styles.title}>{actualSprint().title}</h1>
                        <svg className={styles.textSvg}>
                            <use href={spriteText + '#icon-text'}></use>
                        </svg>
                    </div>
                </div>
            )}

            <div>
                <div>
                    <span>Задача</span>
                    <span>Заплановано годин</span>
                    <span>Витрачено год / день</span>
                    <span>Витрачено годин</span>
                    <svg></svg>
                </div>
                <ul className={styles.sprintsList}>
                    {tasks.length &&
                        tasks.map(task => (
                            <TaskCard
                                key={task._id}
                                date={actualSprint().startDate}
                                task={task}
                            />
                        ))}
                </ul>
            </div>
        </div>
    );
}
