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
    // sprintChangeRequest,
    // sprintChangeSuccess,
    // sprintChangeError,
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
        const sprints = await api.getSprint(projectId);
        dispatch(sprintGetSuccess(sprints.data.sprints));
    } catch ({ data, message }) {
        dispatch(sprintGetError({ data, message }));
    }
};

// const sprintChangetOperation = (newTitle, sprintId) => async dispatch => {
//     dispatch(sprintChangeRequest());

//     try {
//         // const changedTitle = await api.changeSprint(newTitle, sprintId);
//         // const changedTitleToState = changedTitle.data;
//         // dispatch(sprintChangeSuccess({ changedTitleToState, sprintId }));
//     } catch ({ data, message }) {
//         dispatch(sprintChangeError({ data, message }));
//     }
// };

const sprintDeletetOperation = sprintId => async dispatch => {
    dispatch(sprintDeleteRequest());

    try {
        const sprint = await api.deleteSprint(sprintId);
        dispatch(sprintDeleteSuccess(sprintId));
    } catch ({ data, message }) {
        dispatch(sprintDeleteError({ data, message }));
    }
};

const sprintsOperations = {
    addSprint,
    sprintGetOperation,
    // sprintChangetOperation,
    sprintDeletetOperation,
};
export default sprintsOperations;
