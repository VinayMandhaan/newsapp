import axios from 'axios';

const api = axios.create({
    baseURL: 'https://newsapi.org/v2/everything?apiKey=28d38df90e1741a5ba95d0a7d8a27054',
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE"
    }

});

export default api;