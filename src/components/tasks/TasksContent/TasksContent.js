import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { tasksSls, tasksOps } from '../../../redux/tasks';
import TaskCard from '../TaskCard/TaskCard';

import axios from 'axios';

const { getAllTasks } = tasksSls;
const { taskGetOperation } = tasksOps;

export default function TasksContent() {
    const { sprintId } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(taskGetOperation(sprintId));
    }, [dispatch]);

    const tasks = useSelector(getAllTasks);

    const testAction = async () => {
        // const newTask = {
        //     title: 'Task 4',
        //     hoursPlanned: 3,
        // };
        // const qqq = await axios.post('/task/6096504733a36061e804ed8f', newTask);
        // console.log(qqq.data);
        //localhost:3000/projects/609639ea33a36061e804ec19/sprints/6096504733a36061e804ed8f
    };

    return (
        <>
            <button onClick={testAction}>добавить задачу</button>
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
                    {tasks.length &&
                        tasks.map(task => (
                            <TaskCard key={task._id} task={task} />
                        ))}
                </ul>
            </div>
        </>
    );
}
