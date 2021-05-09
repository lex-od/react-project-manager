import { Container } from '../components/common';
import ProjectsList from '../components/projects/ProjectsList';
import AddButton from '../components/common/addButton/AddButton';

export default function ProjectsView() {
    return <Container>
                <ProjectsList />
                <AddButton />
                {/* <AddButton onClick={ }/> */}
           </Container>;
}
