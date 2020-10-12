import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-7e5c0.firebaseio.com/'
});

export default instance;