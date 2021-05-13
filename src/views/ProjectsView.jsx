import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '../components/common';
import ProjectsList from '../components/projects/ProjectsList/ProjectsList';
import { projectsOps } from '../redux/projects';

export default function ProjectsView() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(projectsOps.getProjects());
    }, [dispatch]);

    return (
        <Container>
            <ProjectsList />
        </Container>
    );
}
