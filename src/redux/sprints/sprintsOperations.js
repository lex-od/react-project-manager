import { api } from '../../services';
import { authOps } from '../auth';
import sprintsActs from './sprintsActions';

const {
    sprintAddRequest,
    sprintAddSuccess,
    sprintAddError,
    sprintGetRequest,
    sprintGetSuccess,
    sprintGetError,
    sprintChangeRequest,
    sprintChangeSuccess,
    sprintChangeError,
    sprintDeleteRequest,
    sprintDeleteSuccess,
    sprintDeleteError,
} = sprintsActs;

const addSprint = (sprint, projectId) => async dispatch => {
    dispatch(sprintAddRequest());

    try {
        const data = await api.addSprint(sprint, projectId);

        dispatch(sprintAddSuccess({ ...data, projectId }));
    } catch (error) {
        dispatch(sprintAddError(api.formatError(error)));

        if (error.response?.status === 401) {
            const withParams = () => addSprint(sprint, projectId);
            dispatch(authOps.refreshToken(withParams));
        }
    }
};

const sprintGetOperation = projectId => async dispatch => {
    dispatch(sprintGetRequest());

    try {
        const { sprints } = await api.getSprints(projectId);

        dispatch(sprintGetSuccess(Array.isArray(sprints) ? sprints : []));
    } catch (error) {
        dispatch(sprintGetError(api.formatError(error)));

        if (error.response?.status === 401) {
            const withParams = () => sprintGetOperation(projectId);
            dispatch(authOps.refreshToken(withParams));
        }
    }
};

const sprintChangetOperation = (title, sprintId) => async dispatch => {
    dispatch(sprintChangeRequest());

    try {
        const data = await api.changeSprint(title, sprintId);

        dispatch(sprintChangeSuccess({ data, sprintId }));
    } catch (error) {
        dispatch(sprintChangeError(api.formatError(error)));

        if (error.response?.status === 401) {
            const withParams = () => sprintChangetOperation(title, sprintId);
            dispatch(authOps.refreshToken(withParams));
        }
    }
};

const sprintDeletetOperation = sprintId => async dispatch => {
    dispatch(sprintDeleteRequest());

    try {
        await api.deleteSprint(sprintId);

        dispatch(sprintDeleteSuccess(sprintId));
    } catch (error) {
        dispatch(sprintDeleteError(api.formatError(error)));

        if (error.response?.status === 401) {
            const withParams = () => sprintDeletetOperation(sprintId);
            dispatch(authOps.refreshToken(withParams));
        }
    }
};

const sprintsOperations = {
    addSprint,
    sprintGetOperation,
    sprintChangetOperation,
    sprintDeletetOperation,
};
export default sprintsOperations;
