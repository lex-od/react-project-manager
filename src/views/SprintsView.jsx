import { Container, Sidebar, ViewWrapper } from '../components/common';
import SprintsContent from '../components/sprints/SprintsContent/SprintsContent';

export default function SprintsView() {
    return (
        <Container>
            <ViewWrapper>
                <Sidebar>{/* Компонент SprintsSideContent */}</Sidebar>
                <SprintsContent /> {/*(поставить flex-grow: 1) */}
            </ViewWrapper>
        </Container>
    );
}
