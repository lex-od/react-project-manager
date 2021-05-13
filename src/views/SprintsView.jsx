import {
    LinkContainer,
    Container,
    Sidebar,
    ViewWrapper,
} from '../components/common';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import SprintsContent from '../components/sprints/SprintsContent/SprintsContent';
import SprintsSideContent from '../components/sprints/SprintsSideContent/SprintsSideContent';
import SprintLinkToProject from '../components/sprints/SprintCard/SprintLinkToProject/SprintLinkToProject';
import { projectsOps } from '../redux/projects';
import { sprintsOps } from '../redux/sprints';

export default function SprintsView() {
    const { projectId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(projectsOps.getProjects());
    }, [dispatch]);

    useEffect(() => {
        dispatch(sprintsOps.sprintGetOperation(projectId));
    }, [dispatch, projectId]);

    return (
        <>
            <LinkContainer>
                <SprintLinkToProject />
            </LinkContainer>

            <Container>
                <ViewWrapper>
                    <Sidebar>
                        <SprintsSideContent />
                    </Sidebar>

                    <SprintsContent />
                </ViewWrapper>
            </Container>
        </>
    );
}
