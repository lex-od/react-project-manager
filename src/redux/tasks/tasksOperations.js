import { api } from '../../services';
import tasksActs from './tasksActions';

const {
    taskAdDdRequest,
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

const taskAddOperation = sprintId => async dispatch => {
    dispatch(taskAdDdRequest());

    try {
        const task = await api.newTask(sprintId);
        dispatch(taskAddSuccess(task));
    } catch ({ data, message }) {
        dispatch(taskAddError({ data, message }));
    }
};

const taskGetOperation = sprintId => async dispatch => {
    dispatch(taskGetRequest());

    try {
        const tasks = await api.getTask(sprintId);
        dispatch(taskGetSuccess(tasks));
    } catch ({ data, message }) {
        dispatch(taskGetError({ data, message }));
    }
};

const taskChangetOperation = taskId => async dispatch => {
    dispatch(taskChangeRequest());

    try {
        const task = await api.changeTask(taskId);
        dispatch(taskChangeSuccess(task));
    } catch ({ data, message }) {
        dispatch(taskChangeError({ data, message }));
    }
};

const taskDeletetOperation = taskId => async dispatch => {
    dispatch(taskDeleteRequest());

    try {
        const task = await api.deleteTask(taskId);
        dispatch(taskDeleteSuccess(task));
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
