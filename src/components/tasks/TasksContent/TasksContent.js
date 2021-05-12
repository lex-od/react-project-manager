import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { tasksSls, tasksOps } from '../../../redux/tasks';
import { sprintsSls } from '../../../redux/sprints';
import { NewItemModal, NewTaskForm } from '../../common';
import TaskCard from '../TaskCard/TaskCard';

import AddButton from '../../common/addButton/AddButton';

import styles from './TasksContent.module.scss';
import TaskSprintTitle from '../TaskSprintTitle/TaskSprintTitle';
import TaskActiveDate from '../TaskActiveDate/TaskActiveDate';
import { ChartModal, ChartButton } from '../../tasks';

const { getAllTasks } = tasksSls;
const { taskGetOperation, taskAddOperation } = tasksOps;
const { getAllSprints } = sprintsSls;

export default function TasksContent() {
    const [isShowTaskModal, setIsShowTaskModal] = useState(false);

    const toggleTaskModal = () => setIsShowTaskModal(state => !state);

    const { sprintId } = useParams();
    const sprints = useSelector(getAllSprints);
    const [actualSprint, setactualSprint] = useState(null);
    const [activeDate, setactiveDate] = useState(null);

    const dispatch = useDispatch();

    const tasks = useSelector(getAllTasks);

    // const activeDate = '';

    useEffect(() => {
        dispatch(taskGetOperation(sprintId));
        sprintId &&
            sprints.length > 0 &&
            setactualSprint(sprints.find(sprint => sprint._id === sprintId));

        // setactiveDate();
    }, [dispatch, sprintId, sprints]);

    const changeActiveDate = activeDate => {
        setactiveDate(activeDate);
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
    // открытие модалки с графиком
    const [openModal, setOpenModal] = useState(false);
    const onOpenModal = () => {
        setOpenModal(state => !state);
    };

    return (
        <div className={styles.wrap}>
            <AddButton onClick={toggleTaskModal} />
            {sprints?.length && (
                <div>
                    <TaskActiveDate
                        sprint={actualSprint}
                        changeActiveDate={changeActiveDate}
                    />
                    <TaskSprintTitle sprint={actualSprint} />
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
                    {tasks.length > 0 &&
                        tasks.map(task => (
                            <TaskCard
                                key={task._id}
                                date={actualSprint?.startDate}
                                task={task}
                            />
                        ))}
                </ul>
            </div>

            {isShowTaskModal && (
                <NewItemModal
                    title="Створення задачі"
                    onClose={toggleTaskModal}
                >
                    <NewTaskForm onClose={toggleTaskModal} />
                </NewItemModal>
            )}

            {tasks.length > 2 && (
                <div className={styles.chartBox}>
                    {openModal && <ChartModal onClose={onOpenModal} />}
                    <ChartButton onClick={onOpenModal}></ChartButton>
                </div>
            )}
        </div>
    );
}
