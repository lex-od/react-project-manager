import { api } from '../../services';
import { authOps } from '../auth';
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
    } catch (error) {
        dispatch(taskAddError(api.formatError(error)));

        if (error.response?.status === 401) {
            const withParams = () => taskAddOperation(newTask, sprintId);
            dispatch(authOps.refreshToken(withParams));
        }
    }
};

const taskGetOperation = sprintId => async dispatch => {
    dispatch(taskGetRequest());

    try {
        const tasks = await api.getTask(sprintId);

        dispatch(taskGetSuccess(Array.isArray(tasks) ? tasks : []));
    } catch (error) {
        dispatch(taskGetError(api.formatError(error)));

        if (error.response?.status === 401) {
            const withParams = () => taskGetOperation(sprintId);
            dispatch(authOps.refreshToken(withParams));
        }
    }
};

const taskChangetOperation = (newData, taskId) => async dispatch => {
    dispatch(taskChangeRequest());

    try {
        const data = await api.changeTask(newData, taskId);

        dispatch(taskChangeSuccess({ data, taskId }));
    } catch (error) {
        dispatch(taskChangeError(api.formatError(error)));

        if (error.response?.status === 401) {
            const withParams = () => taskChangetOperation(newData, taskId);
            dispatch(authOps.refreshToken(withParams));
        }
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
