import axios from 'axios';
import { currentBaseUrl } from './baseUrl';

const api = axios.create({
    baseURL: 'https://newsapp-server.vercel.app/news',
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE"
    },

});

export default api;