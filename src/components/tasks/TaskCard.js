import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tasksOps } from '../../redux/tasks';

const { taskChangetOperation } = tasksOps;

export default function TaskCard({
    date,
    title,
    hoursPlanned,
    hoursWastedPerDay,
    hoursWasted,
}) {
    const actualHoursWastedOnDay = hoursWastedPerDay.map(
        ({ currentDay, singleHoursWasted }) => {
            if (currentDay === date) return singleHoursWasted;
        },
    );

    const [hours, setHours] = useState(actualHoursWastedOnDay);

    const [currentTitle, setTitle] = useState(title);

       const dispatch = useDispatch();

    
    const changeData = e => {
        const { name, value } = e.target;
        if (name === 'currentHours') {
            setHours(value);
            dispatch(taskChangetOperation(value));
        }
        if (name === 'title') {
            setTitle(value);
            dispatch(taskChangetOperation(value))
            // Одинаково с предыдущим. проверить, что передаем
        }
    };

    return (
        <div>
            <input
                type="text"
                name="title"
                value={currentTitle}
                onChange={changeData}
            />

            <ul>
                <li>
                    <span>Заплановано годин</span>
                    <span>{hoursPlanned}</span>
                </li>
                <li>
                    <span>Витрачено год / день</span>
                    <input
                        type="text"
                        name="currentHours"
                        value={hours}
                        onChange={changeData}
                    />
                </li>
                <li>
                    <span>Витрачено годин</span>
                    <span>{hoursWasted}</span>
                </li>
            </ul>

            <svg></svg>
        </div>
    );
}
