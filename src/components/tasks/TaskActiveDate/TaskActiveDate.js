import React, { useState, useEffect } from 'react';

import btnRight from '../../../assets/icons/tasksArrowRight.svg';
import btnLeft from '../../../assets/icons/tasksArrowLeft.svg';

import moment from 'moment';

import styles from './TaskActiveDate.module.scss';

export default function TaskActiveDate({ sprint, changeActiveDate }) {
    const [activeDate, setActiveDate] = useState(sprint?.startDate || '');

    useEffect(() => {
        const newDate = new Date();

        if (moment(sprint?.endDate) < newDate)
            return setActiveDate(sprint?.endDate);
        if (moment(sprint?.startDate) < newDate)
            return setActiveDate(moment(newDate).format('YYYY-MM-DD'));

        setActiveDate(sprint?.startDate);
    }, [sprint]);

    let timeInterval =
        moment.duration(moment(activeDate) - moment(sprint?.startDate)).days() +
        1;

    const incrDate = () => {
        const newDate = moment(activeDate).add(1, 'days').format('YYYY-MM-DD');
        setActiveDate(newDate);
        changeActiveDate(newDate);
    };

    const decrDate = () => {
        const newDate = moment(activeDate)
            .subtract(1, 'days')
            .format('YYYY-MM-DD');

        setActiveDate(newDate);
        changeActiveDate(newDate);
    };

    return (
        <div className={styles.dateBlock}>
            <div>
                <button
                    type="button"
                    onClick={decrDate}
                    className={styles.btnBaze}
                >
                    {moment(activeDate) > moment(sprint?.startDate) && (
                        <svg className={styles.nextDate}>
                            <use href={btnLeft + '#Capa_1'}></use>
                        </svg>
                    )}
                </button>

                {sprint?.startDate && (
                    <span className={styles.dateText}>
                        <span className={styles.dateTextActive}>
                            {timeInterval}
                        </span>

                        <span className={styles.dateTextDuration}>
                            {' '}
                            / {sprint.duration}
                        </span>
                    </span>
                )}

                <button onClick={incrDate} className={styles.btnBaze}>
                    {moment(activeDate) < moment(sprint?.endDate) && (
                        <svg className={styles.nextDate}>
                            <use href={btnRight + '#Capa_1'}></use>
                        </svg>
                    )}
                </button>
            </div>
            <div>
                {sprint?.startDate && (
                    <span className={styles.dateTextDate}>{activeDate}</span>
                )}
            </div>
        </div>
    );
}
