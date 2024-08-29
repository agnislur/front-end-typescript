import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:5000',
  withCredentials: true, // untuk mengirimkan cookies/sessions
});

export default instance;
