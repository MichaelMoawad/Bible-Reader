import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.biblia.com/v1/bible/'
})