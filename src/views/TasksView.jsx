import {
    Container,
    NewItemModal,
    NewTaskForm,
    Sidebar,
    ViewWrapper,
} from '../components/common';
import { TasksContent } from '../components/tasks';
import { TasksSideContent } from '../components/tasks';

export default function TasksView() {
    return (
        <Container>
            <ViewWrapper>
                <Sidebar>
                    <TasksSideContent />
                </Sidebar>
                {/* Компонент TasksContent (поставить flex-grow: 1) */}
                <TasksContent />
            </ViewWrapper>

            <NewItemModal title="Створення задачі">
                <NewTaskForm />
            </NewItemModal>
        </Container>
    );
}
