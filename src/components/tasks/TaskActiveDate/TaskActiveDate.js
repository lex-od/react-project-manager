import React, { useState, useEffect } from 'react';
import moment from 'moment';

export default function TaskActiveDate({ sprint, changeActiveDate }) {
    const [activeDate, setActiveDate] = useState(sprint?.startDate || '');

    useEffect(() => {
        setActiveDate(sprint?.startDate);
    }, [sprint]);

    let timeInterval =
        moment.duration(moment(activeDate) - moment(sprint?.startDate)).days() +
        1;

    const incrDate = () => {
        setActiveDate(moment(activeDate).add(1, 'days').format('YYYY-MM-DD'));
    };

    const decrDate = () => {
        setActiveDate(
            moment(activeDate).subtract(1, 'days').format('YYYY-MM-DD'),
        );
    };

    return (
        <div>
            {activeDate > sprint?.startDate && (
                <button onClick={decrDate}>-</button>
            )}
            {sprint?.startDate && (
                <span>
                    {timeInterval}/{sprint.duration}
                </span>
            )}
            {activeDate < sprint?.endDate && (
                <button onClick={incrDate}>+</button>
            )}

            {sprint?.startDate && <span>{activeDate}</span>}
        </div>
    );
}
