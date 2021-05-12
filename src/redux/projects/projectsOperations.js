import { api } from '../../services';
import { authOps } from '../auth';
import projectsActs from './projectsActions';

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
    changeProjectRequest,
    changeProjectSucess,
    changeProjectError,
    addMemberRequest,
    addMemberSuccess,
    addMemberError,
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
        const data = await api.getProject();

        dispatch(getProjectsSuccess(Array.isArray(data) ? data : []));
    } catch (error) {
        dispatch(getProjectsError(api.formatError(error)));

        if (error.response?.status === 401) {
            dispatch(authOps.refreshToken(getProjects));
        }
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

const changeProject = (title, projectId) => async dispatch => {
    dispatch(changeProjectRequest());

    try {
        const data = await api.changeProject(title, projectId);

        dispatch(changeProjectSucess({ data, projectId }));
    } catch (error) {
        dispatch(changeProjectError(api.formatError(error)));

        if (error.response?.status === 401) {
            const withParams = () => changeProject(title, projectId);
            dispatch(authOps.refreshToken(withParams));
        }
    }
};

const deleteProject = projectId => async dispatch => {
    dispatch(deleteProjectRequest());

    try {
        await api.deleteProject(projectId);

        dispatch(deleteProjectSuccess(projectId));
    } catch (error) {
        dispatch(deleteProjectError(api.formatError(error)));

        if (error.response?.status === 401) {
            const withParams = () => deleteProject(projectId);
            dispatch(authOps.refreshToken(withParams));
        }
    }
};

const projectsOperations = {
    getProjects,
    addProject,
    deleteProject,
    changeProject,
    addMember,
};
export default projectsOperations;
