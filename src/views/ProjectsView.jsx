import React from 'react';
import { useDispatch } from 'react-redux';//временно

import { Container } from '../components/common';
import ProjectsList from '../components/projects/ProjectsList';
import { projectsOps } from '../redux/projects'; // временно
import AddButton from '../components/common/addButton/AddButton';

const { addProject } = projectsOps; // временно

export default function ProjectsView() {
    //временное решение. удалить при создании модалки
    const dispatch = useDispatch();
    const newProject = {
        title: 'Project 1',
        description: 'Project 1 description',
    };

    //временное решение. заменить на модалку
    const addNewProject = () => {
        dispatch(addProject(newProject));
    };

    return (
        <Container>
            <ProjectsList />
            {/* <AddButton /> */}
            <AddButton onClick={addNewProject} />
        </Container>
    );
}
