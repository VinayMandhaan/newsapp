import axios from 'axios';

const api = axios.create({
    baseURL: 'https://newsapi.org/v2/everything',
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE"
    }

});

export default api;