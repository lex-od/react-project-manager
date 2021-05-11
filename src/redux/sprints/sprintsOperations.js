import { api } from '../../services';
import sprintsActs from './sprintsActions';

const {
    addMemberRequest,
    addMemberSuccess,
    addMemberError,
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

const addMember = () => async dispatch => {
    dispatch(addMemberRequest());

    try {
        // const response = await ...
        dispatch(addMemberSuccess());
    } catch (error) {
        dispatch(addMemberError());
    }
};

const sprintAddOperation = (newSprint, projectId) => async dispatch => {
    dispatch(sprintAddRequest());

    try {
        const sprint = await api.newSprint(newSprint, projectId);
        dispatch(sprintAddSuccess(sprint));
    } catch ({ data, message }) {
        dispatch(sprintAddError({ data, message }));
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

const sprintChangetOperation = (newTitle, sprintId) => async dispatch => {
    dispatch(sprintChangeRequest());

    try {
        // const changedTitle = await api.changeSprint(newTitle, sprintId);
        // const changedTitleToState = changedTitle.data;
        // dispatch(sprintChangeSuccess({ changedTitleToState, sprintId }));
    } catch ({ data, message }) {
        dispatch(sprintChangeError({ data, message }));
    }
};

const sprintDeletetOperation = sprintId => async dispatch => {
    dispatch(sprintDeleteRequest());

    try {
        // const sprint = await api.deleteSprint(sprintId);
        // dispatch(sprintDeleteSuccess(sprintId));
    } catch ({ data, message }) {
        dispatch(sprintDeleteError({ data, message }));
    }
};

const sprintsOperations = {
    addMember,
    sprintAddOperation,
    sprintGetOperation,
    sprintChangetOperation,
    sprintDeletetOperation,
};
export default sprintsOperations;
