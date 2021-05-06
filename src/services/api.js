import axios from 'axios';

axios.defaults.baseURL = 'https://sbc-backend.goit.global';

const setToken = token =>
    (axios.defaults.headers.common.Authorization = `Bearer ${token}`);

const unsetToken = () => (axios.defaults.headers.common.Authorization = '');

const register = async credentials =>
    (await axios.post('/auth/register', credentials)).data;

const login = async credentials =>
    (await axios.post('/auth/login', credentials)).data;

const logOut = async credentials =>
    (await axios.post('/auth/logout', credentials)).data;

const refresh = async sid => (await axios.post('/auth/refresh', { sid })).data;

const api = { setToken, unsetToken, register, login, logOut, refresh };
export default api;
