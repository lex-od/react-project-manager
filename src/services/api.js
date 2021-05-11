import axios from 'axios';

axios.defaults.baseURL = 'https://sbc-backend.goit.global';

const setToken = token =>
    (axios.defaults.headers.common.Authorization = `Bearer ${token}`);

const unsetToken = () => (axios.defaults.headers.common.Authorization = '');

const formatError = ({ name, message, response: { status } }) => ({
    name,
    message,
    status,
});

const register = async credentials =>
    (await axios.post('/auth/register', credentials)).data;

const login = async credentials =>
    (await axios.post('/auth/login', credentials)).data;

const logOut = async credentials =>
    (await axios.post('/auth/logout', credentials)).data;

const refresh = async sid => (await axios.post('/auth/refresh', { sid })).data;

//projects

const addProject = async project =>
    (await axios.post('/project', project)).data;

const getProject = async () => (await axios.get('/project')).data;

//sprints

const newSprint = async (newSprint, projectId) =>
    (await axios.post(`/sprint/${projectId}`, newSprint)).data;

const getSprint = async projectId => await axios.get(`/sprint/${projectId}`);

//tasks

const newTask = async (newTask, sprintId) =>
    (await axios.post(`/task/${sprintId}`, newTask)).data;

const getTask = async sprintId => await axios.get(`/task/${sprintId}`);

const changeTask = async (newData, taskId) =>
    await axios.patch(`/task/${taskId}`, newData);

const deleteTask = async taskId => await axios.delete(`/task/${taskId}`);

const api = {
    setToken,
    unsetToken,
    register,
    login,
    newSprint,
    getSprint,
    newTask,
    getTask,
    changeTask,
    deleteTask,
    formatError,
    logOut,
    refresh,
    addProject,
    getProject,
};
export default api;
