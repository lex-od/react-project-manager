import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sprintsSls, sprintsOps } from '../../../redux/sprints';
import SprintCard from '../SprintCard/SprintCard';

import styles from './SprintsContent.module.scss';
import spriteSearch from '../../../assets/icons/searchIcon.svg';
import spriteText from '../../../assets/icons/sprintsText.svg';
import spriteDelete from '../../../assets/icons/sprintsDelete.svg';
import spriteAddPeople from '../../../assets/icons/addPeople.svg';
import AddButton from '../../common/addButton/AddButton';
const { sprintAddOperation } = sprintsOps; // временно

const { getAllSprints } = sprintsSls;
const { sprintGetOperation } = sprintsOps;

export default function SprintsContent() {
    const { projectId } = useParams();
    // console.log(projectId);

    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(sprintGetOperation(projectId));
        },
        projectId,
        [dispatch],
    );

    const sprints = useSelector(getAllSprints);
    // console.log(sprints);

    //временное решение. удалить при создании модалки
    const newSprint = {
        title: 'Sprint 1',
        endDate: '2021-10-20',
        duration: 5,
    };

    //временное решение. заменить на модалку
    const addNewSprint = () => {
        dispatch(sprintAddOperation(newSprint, projectId));
    };

    return (
        <div className={styles.wrap}>
            <div className={styles.sprintHead}>
                <h1 className={styles.title}>Project 1</h1>
                <svg className={styles.textSvg}>
                    <use href={spriteText + '#icon-text'}></use>
                </svg>
            </div>
            <div className={styles.sprintDescription}>
                <p className={styles.sprintDescriptionText}>
                    Короткий опис проекту, якщо він є, розміщуєтсья тут. Ширина
                    тектового блоку
                </p>
            </div>
            <div className={styles.addPeopleWrap}>
                <svg className={styles.addPeopleSvg}>
                    <use href={spriteAddPeople + '#icon-addPeople'}></use>
                </svg>
                <button type="button" className={styles.addPeopleBtn}>
                    Додати людей
                </button>
                <AddButton onClick={addNewSprint} />
            </div>
            <ul className={styles.sprintsList}>
                {sprints.length &&
                    sprints.map(sprint => (
                        <li className={styles.sprintCard} key={sprint._id}>
                            <SprintCard sprint={sprint} />
                        </li>
                    ))}

                {/* // <li className={styles.sprintCard}>
                //     <h2 className={styles.sprintCardHead}>
                //         Sprint Burndown Chart 1
                //     </h2>
                //     <div className={styles.sprintItem}>
                //         <span className={styles.sprintItemText}>
                //             Дата початку
                //         </span>
                //         <span className={styles.sprintItemText}>10 Лип</span>
                //     </div>
                //     <div className={styles.sprintItem}>
                //         <span className={styles.sprintItemText}>
                //             Дата закінченя
                //         </span>
                //         <span className={styles.sprintItemText}>22 Лип</span>
                //     </div>
                //     <div className={styles.sprintItem}>
                //         <span className={styles.sprintItemText}>
                //             Тривалість
                //         </span>
                //         <span className={styles.sprintItemText}>226</span>
                //     </div>
                //     <svg className={styles.deleteSvg}>
                //         <use href={spriteDelete + '#icon-delete'}></use>
                //     </svg>
                // </li>
                // <li className={styles.sprintCard}>
                //     <h2 className={styles.sprintCardHead}>
                //         Sprint Burndown Chart 1
                //     </h2>
                //     <div className={styles.sprintItem}>
                //         <span className={styles.sprintItemText}>
                //             Дата початку
                //         </span>
                //         <span className={styles.sprintItemText}>10 Лип</span>
                //     </div>
                //     <div className={styles.sprintItem}>
                //         <span className={styles.sprintItemText}>
                //             Дата закінченя
                //         </span>
                //         <span className={styles.sprintItemText}>22 Лип</span>
                //     </div>
                //     <div className={styles.sprintItem}>
                //         <span className={styles.sprintItemText}>
                //             Тривалість
                //         </span>
                //         <span className={styles.sprintItemText}>226</span>
                //     </div>
                //     <svg className={styles.deleteSvg}>
                //         <use href={spriteDelete + '#icon-delete'}></use>
                //     </svg>
                // </li>
                // <li className={styles.sprintCard}>
                //     <h2 className={styles.sprintCardHead}>
                //         Sprint Burndown Chart 1
                //     </h2>
                //     <div className={styles.sprintItem}>
                //         <span className={styles.sprintItemText}>
                //             Дата початку
                //         </span>
                //         <span className={styles.sprintItemText}>10 Лип</span>
                //     </div>
                //     <div className={styles.sprintItem}>
                //         <span className={styles.sprintItemText}>
                //             Дата закінченя
                //         </span>
                //         <span className={styles.sprintItemText}>22 Лип</span>
                //     </div>
                //     <div className={styles.sprintItem}>
                //         <span className={styles.sprintItemText}>
                //             Тривалість
                //         </span>
                //         <span className={styles.sprintItemText}>226</span>
                //     </div>
                //     <svg className={styles.deleteSvg}>
                //         <use href={spriteDelete + '#icon-delete'}></use>
                //     </svg>
                // </li> */}
            </ul>
        </div>
    );
}
