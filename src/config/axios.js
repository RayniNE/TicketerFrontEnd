import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
    }
    
});

export default clienteAxios;