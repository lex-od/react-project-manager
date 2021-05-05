import { Container, Sidebar, ViewWrapper } from '../components/common';

export default function SprintsView() {
    return (
        <Container>
            <ViewWrapper>
                <Sidebar>{/* Компонент SprintsSideContent */}</Sidebar>
                {/* Компонент SprintsContent (поставить flex-grow: 1) */}
            </ViewWrapper>
        </Container>
    );
}
