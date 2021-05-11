import { api } from '../../services';
import tasksActs from './tasksActions';

const {
    taskAddRequest,
    taskAddSuccess,
    taskAddError,
    taskGetRequest,
    taskGetSuccess,
    taskGetError,
    taskChangeRequest,
    taskChangeSuccess,
    taskChangeError,
    taskDeleteRequest,
    taskDeleteSuccess,
    taskDeleteError,
} = tasksActs;

const taskAddOperation = (newTask, sprintId) => async dispatch => {
    dispatch(taskAddRequest());

    try {
        const task = await api.newTask(newTask, sprintId);
        dispatch(taskAddSuccess(task));
    } catch ({ data, message }) {
        dispatch(taskAddError({ data, message }));
    }
};

const taskGetOperation = sprintId => async dispatch => {
    dispatch(taskGetRequest());

    try {
        const tasks = await api.getTask(sprintId);
        dispatch(taskGetSuccess(tasks.data));
    } catch ({ data, message }) {
        dispatch(taskGetError({ data, message }));
    }
};

const taskChangetOperation = (newData, taskId) => async dispatch => {
    dispatch(taskChangeRequest());

    try {
        const changedHours = await api.changeTask(newData, taskId);

        const changedHoursToState = changedHours.data;
        dispatch(taskChangeSuccess({ changedHoursToState, taskId }));
    } catch ({ data, message }) {
        dispatch(taskChangeError({ data, message }));
    }
};

const taskDeletetOperation = taskId => async dispatch => {
    dispatch(taskDeleteRequest());

    try {
        await api.deleteTask(taskId);

        dispatch(taskDeleteSuccess(taskId));
    } catch ({ data, message }) {
        dispatch(taskDeleteError({ data, message }));
    }
};

const tasksOps = {
    taskAddOperation,
    taskGetOperation,
    taskChangetOperation,
    taskDeletetOperation,
};
export default tasksOps;
