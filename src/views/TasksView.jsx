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

export default function TasksView() {
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
