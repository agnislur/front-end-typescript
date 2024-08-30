// import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'http://127.0.0.1:5000',
//   withCredentials: true, // untuk mengirimkan cookies/sessions
// });

// export default instance;


import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://0c4c-103-171-153-170.ngrok-free.app/', // URL ngrok publik untuk back end
  withCredentials: true,
});

export default instance;