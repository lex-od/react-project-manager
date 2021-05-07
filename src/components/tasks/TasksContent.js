import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tasksSls, tasksOps } from '../../redux/tasks';
import TaskCard from './TaskCard';

const { getAllTasks } = tasksSls;
const { taskGetOperation } = tasksOps;

export default function TasksContent() {
    const dispatch = useDispatch();

    const tasks = useSelector(getAllTasks);

    useEffect(() => {
        dispatch(taskGetOperation());
    }, [dispatch]);
    return (
        <>
            <span>Дата</span>
            <h1>Sprint Burndown Chart 1</h1>
            {/* // нужно получить ссылку на название проекта */}
            <div>
                <span>Задача</span>
                <span>Заплановано годин</span>
                <span>Витрачено год / день</span>
                <span>Витрачено годин</span>
                <svg></svg>
                <ul>
                    {tasks.map(task => (
                        <TaskCard key={task._id} />
                    ))}
                </ul>
            </div>
        </>
    );
}
