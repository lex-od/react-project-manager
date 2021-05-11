import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function TaskSprintCard({ sprint }) {
    const { projectId } = useParams();
    return (
        <li>
            <Link to={`/projects/${projectId}/sprints/${sprint._id}`}>
                {/* <svg></svg> */}
                <span>{sprint.title}</span>
            </Link>
        </li>
    );
}
