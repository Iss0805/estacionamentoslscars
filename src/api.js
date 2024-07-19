import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost/slscars/api.php"
});

export default api;