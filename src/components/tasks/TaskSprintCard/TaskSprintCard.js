import React from 'react';
import { Link } from 'react-router-dom';

export default function TaskSprintCard({ sprint }) {
    return (
        <li>
            <Link>
                {/* <svg></svg> */}
                <span>{sprint.title}</span>
            </Link>
        </li>
    );
}
