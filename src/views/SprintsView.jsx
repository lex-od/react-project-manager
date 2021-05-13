import {
    LinkContainer,
    Container,
    Sidebar,
    ViewWrapper,
} from '../components/common';
import SprintsContent from '../components/sprints/SprintsContent/SprintsContent';
import SprintsSideContent from '../components/sprints/SprintsSideContent/SprintsSideContent';
import SprintLinkToProject from '../components/sprints/SprintCard/SprintLinkToProject/SprintLinkToProject';
export default function SprintsView() {
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
