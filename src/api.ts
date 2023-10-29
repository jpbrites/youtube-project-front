import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:4000', //Para onde será feita a requisição
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
})

export default api;