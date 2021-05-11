import { api } from '../../services';
import projectsActs from './projectsActions';
import { authOps } from '../auth';

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
        // const response = await ...
        dispatch(getProjectsSuccess());
    } catch (error) {
        dispatch(getProjectsError());
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
    addMember,
    getProjects,
    addProject,
    deleteProject,
};
export default projectsOperations;
