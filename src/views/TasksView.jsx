import { Container, Sidebar, ViewWrapper } from '../components/common';
import { TasksContent } from '../components/tasks';
import { TasksSideContent } from '../components/tasks';

export default function TasksView() {
    return (
        <Container>
            <ViewWrapper>
                <Sidebar>
                    <TasksSideContent />
                </Sidebar>

                <TasksContent />
            </ViewWrapper>
        </Container>
    );
}
