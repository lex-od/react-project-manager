import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { projectsOps } from '../../../redux/projects';

import styles from '../SprintsContent/SprintsContent.module.scss';
import spriteText from '../../../assets/icons/sprintsText.svg';

const { changeProject } = projectsOps;

export default function SprintProjectTitle({ project }) {
    const [activeInput, setTitleChange] = useState(false);
    const [currentTitle, setTitle] = useState(project?.title || '');
    const dispatch = useDispatch();

    const changeData = e => {
        const { value } = e.target;
        setTitle(value);
    };

    useEffect(() => {
        setTitle(project?.title);
    }, [project]);

    const sendnewTitle = e => {
        e.preventDefault();
        setTitleChange(!activeInput);
        if (activeInput) {
            const newTitle = {
                title: currentTitle,
            };

            dispatch(changeProject(newTitle, project._id));
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
                <h1 className={styles.title}>{project?.title}</h1>
            )}
            <button onClick={sendnewTitle}>
                <svg className={styles.textSvg}>
                    <use href={spriteText + '#icon-text'}></use>
                </svg>
            </button>
        </div>
    );
}
