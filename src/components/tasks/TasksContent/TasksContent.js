import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { tasksSls } from '../../../redux/tasks';
import { sprintsSls } from '../../../redux/sprints';
import { NewItemModal, NewTaskForm } from '../../common';
import TaskCard from '../TaskCard/TaskCard';

import AddButton from '../../common/addButton/AddButton';

import styles from './TasksContent.module.scss';
import TaskSprintTitle from '../TaskSprintTitle/TaskSprintTitle';
import TaskActiveDate from '../TaskActiveDate/TaskActiveDate';
import { ChartModal, ChartButton } from '../../tasks';

const { getAllTasks } = tasksSls;
const { getAllSprints } = sprintsSls;

export default function TasksContent() {
    const [isShowTaskModal, setIsShowTaskModal] = useState(false);
    const [actualSprint, setactualSprint] = useState(null);
    const [activeDate, setactiveDate] = useState(null);

    const { sprintId } = useParams();

    const sprints = useSelector(getAllSprints);
    const tasks = useSelector(getAllTasks);

    useEffect(() => {
        // sprintId &&
        //     sprints.length > 0 &&
        const actSprint = sprints.find(sprint => sprint._id === sprintId);

        actSprint && setactualSprint(actSprint);
        actSprint && setactiveDate(actSprint?.startDate);
    }, [sprintId, sprints]);

    const changeActiveDate = newDate => {
        setactiveDate(newDate);
    };

    const toggleTaskModal = () => setIsShowTaskModal(state => !state);

    // открытие модалки с графиком
    const [openModal, setOpenModal] = useState(false);
    const onOpenModal = () => {
        setOpenModal(state => !state);
    };

    return (
        <div>
            <div className={styles.wrap}>
                <div className={styles.topList}>
                    {sprints?.length && (
                        <TaskActiveDate
                            sprint={actualSprint}
                            changeActiveDate={changeActiveDate}
                        />
                    )}
                    <div>
                        <p>тут будет компонент поиска</p>
                    </div>
                </div>
                <div className={styles.topList}>
                    {sprints?.length && (
                        <TaskSprintTitle sprint={actualSprint} />
                    )}
                    <div className={styles.btnAddBlock}>
                        <AddButton
                            onClick={toggleTaskModal}
                            className={styles.btnAdd}
                        />
                        <span className={styles.btnAddText}>
                            Створити задачу
                        </span>
                    </div>
                </div>

                <div className={styles.titleTaskList}>
                    <span className={styles.titleTaskListText}>Задача</span>
                    <span className={styles.titleTaskListText}>
                        Заплановано годин
                    </span>
                    <span className={styles.titleTaskListText}>
                        Витрачено год / день
                    </span>
                    <span className={styles.titleTaskListText}>
                        Витрачено годин
                    </span>
                    <svg></svg>
                </div>
            </div>
            <div className={styles.wrap}>
                <ul className={styles.tasksList}>
                    {tasks.length > 0 &&
                        activeDate &&
                        tasks.map(task => (
                            <TaskCard
                                key={task._id}
                                date={activeDate}
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
