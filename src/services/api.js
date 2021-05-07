import axios from 'axios';

axios.defaults.baseURL = 'https://sbc-backend.goit.global';

const setToken = token =>
    (axios.defaults.headers.common.Authorization = `Bearer ${token}`);

const unsetToken = () => (axios.defaults.headers.common.Authorization = '');

const register = async credentials =>
    (await axios.post('/auth/register', credentials)).data;

const login = async credentials =>
    (await axios.post('/auth/login', credentials)).data;

//tasks - необходимо проверять запросы

const newTask = async sprintId => (await axios.post(`/task/${sprintId}`)).data;

const getTask = async sprintId => (await axios.get(`/task/${sprintId}`)).data;

const changeTask = async taskId => (await axios.patch(`/task/${taskId}`)).data;

const deleteTask = async taskId => (await axios.delete(`/task/${taskId}`)).data;

const api = {
    setToken,
    unsetToken,
    register,
    login,
    newTask,
    getTask,
    changeTask,
    deleteTask,
};
export default api;
