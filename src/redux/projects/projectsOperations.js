import { api } from '../../services';
import projectsActs from './projectsActions';
import { authOps } from '../auth';

const {
    getProjectsRequest,
    getProjectsSuccess,
    getProjectsError,
    addProjectRequest,
    addProjectSuccess,
    addProjectError,
    deleteProjectRequest,
    deleteProjectSuccess,
    deleteProjectError,
} = projectsActs;

const getProjects = () => async dispatch => {
    dispatch(getProjectsRequest());

    try {
        const projects = await api.getProject();
        console.log(projects);
        dispatch(getProjectsSuccess(projects));
    } catch ({ data, message }) {
        dispatch(getProjectsError({ data, message }));
    }
};

const addProject = project => async dispatch => {
    dispatch(addProjectRequest());

    try {
        const data = await api.addProject(project);

        dispatch(addProjectSuccess(data));
    } catch (error) {
        dispatch(addProjectError(api.formatError(error)));

        if (error.response.status === 401) {
            const withParams = () => addProject(project);
            dispatch(authOps.refreshToken(withParams));
        }
    }
};

const deleteProject = () => async dispatch => {
    dispatch(deleteProjectRequest());

    try {
        // const response = await ...
        dispatch(deleteProjectSuccess());
    } catch (error) {
        dispatch(deleteProjectError());
    }
};

const projectsOperations = {
    getProjects,
    addProject,
    deleteProject,
};
export default projectsOperations;
