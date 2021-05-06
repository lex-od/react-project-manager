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

const api = { setToken, unsetToken, formatError, register, login };
export default api;
