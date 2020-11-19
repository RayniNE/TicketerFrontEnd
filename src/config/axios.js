import axios from 'axios';

const clienteAxios = axios.create({
    baseUrl: process.env.BACKEND_URL
});

export default clienteAxios;