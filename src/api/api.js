import axios from 'axios';

const config = {
  baseURL: '/api',
  timeout: 60000,
};

const api = axios.create(config);

export default api;
