import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { sprintsOps, sprintsSls } from '../../../redux/sprints';

import TaskSprintCard from '../TaskSprintCard/TaskSprintCard';

const { sprintGetOperation } = sprintsOps;
const { getAllSprints } = sprintsSls;

export default function TasksSideContent() {
    const dispatch = useDispatch();
    const { projectId } = useParams();

    //тут нунжно добавить проверку. Если спринты уже есть в стейте, их не нужно снова запрашивать с бекенда
    useEffect(() => {
        dispatch(sprintGetOperation(projectId));
    }, [dispatch]);

    const sprints = useSelector(getAllSprints);

    return (
        <>
            <div>
                <svg></svg>
                <span>Показати спринти</span>
            </div>
            <ul>
                {sprints.length &&
                    sprints.map(sprint => (
                        <TaskSprintCard key={sprint._id} sprint={sprint} />
                    ))}
            </ul>
            <button>Створити спринт</button>
        </>
    );
}