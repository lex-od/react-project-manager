import React, { useEffect } from 'react';

export default function TasksContent() {
    return (
        <>
            <span>Дата</span>
            <h1>Sprint Burndown Chart 1</h1>
            {/* // нужно получить ссылку на название проекта */}
            <div>
                <span>Задача</span>
                <span>Заплановано годин</span>
                <span>Витрачено год / день</span>
                <span>Витрачено годин</span>
                <svg></svg>
                {/* {tasks.map( ) } */}
            </div>
        </>
    );
}
