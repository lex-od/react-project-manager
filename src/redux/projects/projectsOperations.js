import { api } from '../../services';
import { authOps } from '../auth';
import projectsActs from './projectsActions';

const {
    addMemberRequest,
    addMemberSuccess,
    addMemberError,
    getProjectsRequest,
    getProjectsSuccess,
    getProjectsError,
    addProjectRequest,
    addProjectSuccess,
    addProjectError,
    changedProjectRequest,
    changedProjectSucess,
    changedProjectError,
    deleteProjectRequest,
    deleteProjectSuccess,
    deleteProjectError,
} = projectsActs;

const addMember = (member, projectId) => async dispatch => {
    dispatch(addMemberRequest());

    try {
        const data = await api.addMember(member, projectId);

        dispatch(addMemberSuccess({ data, projectId }));
    } catch (error) {
        dispatch(addMemberError(api.formatError(error)));

        if (error.response?.status === 401) {
            const withParams = () => addMember(member, projectId);
            dispatch(authOps.refreshToken(withParams));
        }
    }
};

const getProjects = () => async dispatch => {
    dispatch(getProjectsRequest());

    try {
        const projects = await api.getProject();

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

        if (error.response?.status === 401) {
            const withParams = () => addProject(project);
            dispatch(authOps.refreshToken(withParams));
        }
    }
};

const changeProject = (newTitle, projectId) => async dispatch => {
    dispatch(changedProjectRequest());

    try {
        const changedTitle = await api.changeProject(newTitle, projectId);
        dispatch(changedProjectSucess({ changedTitle, projectId }));
    } catch ({ data, message }) {
        dispatch(changedProjectError({ data, message }));
    }
};

const deleteProject = projectId => async dispatch => {
    dispatch(deleteProjectRequest());

    try {
        await api.deleteProject(projectId);

        dispatch(deleteProjectSuccess(projectId));
    } catch ({ data, message }) {
        dispatch(deleteProjectError({ data, message }));
    }
};

const projectsOperations = {
    addMember,
    getProjects,
    addProject,
    deleteProject,
};

export default projectsOperations;
