import { Container, Sidebar, ViewWrapper } from '../components/common';
import SprintsContent from '../components/sprints/SprintsContent/SprintsContent';
import SprintsSideContent from '../components/sprints/SprintsSideContent/SprintsSideContent';

export default function SprintsView() {
    return (
        <Container>
            <ViewWrapper>
                <Sidebar>
                    <SprintsSideContent />
                </Sidebar>

                <SprintsContent />
            </ViewWrapper>
        </Container>
    );
}
