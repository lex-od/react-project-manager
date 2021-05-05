import { Container, Sidebar, ViewWrapper } from '../components/common';

export default function TasksView() {
    return (
        <Container>
            <ViewWrapper>
                <Sidebar>{/* Компонент TasksSideContent */}</Sidebar>
                {/* Компонент TasksContent (поставить flex-grow: 1) */}
            </ViewWrapper>
        </Container>
    );
}
