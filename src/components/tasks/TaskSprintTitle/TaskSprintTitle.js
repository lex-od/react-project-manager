import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { sprintsOps } from '../../../redux/sprints';
import styles from './TaskSprintTitle.module.scss';

import spriteText from '../../../assets/icons/sprintsText.svg';

const { sprintChangetOperation } = sprintsOps;

export default function TaskSprintTitle({ sprint }) {
    const [activeInput, setTitleChange] = useState(false);
    const [currentTitle, setTitle] = useState(sprint?.title || '');
    const dispatch = useDispatch();

    const changeData = e => {
        const { value } = e.target;
        setTitle(value);
    };

    useEffect(() => {
        setTitle(sprint?.title);
    }, [sprint]);

    const sendnewTitle = e => {
        e.preventDefault();
        setTitleChange(!activeInput);
        if (activeInput) {
            dispatch(sprintChangetOperation(currentTitle, sprint._id));
        }
    };

    return (
        <div className={styles.sprintHead}>
            {activeInput ? (
                <form onSubmit={sendnewTitle}>
                    <input
                        type="text"
                        name="currentTitle"
                        onChange={changeData}
                        className={styles.title}
                        value={currentTitle}
                    />
                </form>
            ) : (
                <h1 className={styles.title}>{sprint?.title}</h1>
            )}
            <button onClick={sendnewTitle}>
                <svg className={styles.textSvg}>
                    <use href={spriteText + '#icon-text'}></use>
                </svg>
            </button>
        </div>
    );
}
