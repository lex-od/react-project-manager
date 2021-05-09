import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { tasksOps } from '../../redux/tasks';

const { taskChangetOperation, taskDeletetOperation } = tasksOps;

export default function TaskCard({ date = '2020-12-25', task }) {
    console.log(task);

    const actualDay = task.hoursWastedPerDay.find(day => {
        if (day.currentDay === date) return day;
    });

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
        <div>
            <span>{task.title}</span>

            <ul>
                <li>
                    <span>Заплановано годин</span>
                    <span>{task.hoursPlanned}</span>
                </li>
                <li>
                    <span>Витрачено год / день</span>
                    <input
                        type="text"
                        name="currentHours"
                        value={hours}
                        onChange={changeData}
                        onBlur={setchangeData}
                    />
                </li>
                <li>
                    <span>Витрачено годин</span>
                    <span>{task.hoursWasted}</span>
                </li>
            </ul>
            <button onClick={deleteTask}>delete</button>
            {/* <svg></svg> */}
        </div>
    );
}
