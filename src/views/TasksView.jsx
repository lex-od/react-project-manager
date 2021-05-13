import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import {
    Container,
    LinkContainer,
    Sidebar,
    ViewWrapper,
} from '../components/common';
import {
    TasksContent,
    TasksSideContent,
    TaskLinkToSprint,
} from '../components/tasks';
import { sprintsOps } from '../redux/sprints';
import { tasksOps } from '../redux/tasks';

export default function TasksView() {
    const { sprintId, projectId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(tasksOps.taskGetOperation(sprintId));
    }, [dispatch, sprintId]);

    useEffect(() => {
        dispatch(sprintsOps.sprintGetOperation(projectId));
    }, [dispatch, projectId]);

    return (
        <>
            <LinkContainer>
                <TaskLinkToSprint />
            </LinkContainer>

            <Container>
                <ViewWrapper>
                    <Sidebar>
                        <TasksSideContent />
                    </Sidebar>

                    <TasksContent />
                </ViewWrapper>
            </Container>
        </>
    );
}
