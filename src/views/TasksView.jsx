import { Container, Sidebar, ViewWrapper } from '../components/common';
import TasksContent from '../components/tasks/TasksContent';

export default function TasksView() {
    return (
        <Container>
            <ViewWrapper>
                <Sidebar>{/* Компонент TasksSideContent */}</Sidebar>
                {/* Компонент TasksContent (поставить flex-grow: 1) */}
                <TasksContent />
            </ViewWrapper>
        </Container>
    );
}
