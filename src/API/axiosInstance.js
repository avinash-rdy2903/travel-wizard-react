import axios from 'axios';

export default axios.create({
    baseURL:"https://travel-wizard-t9.onrender.com//",
    withCredentials:true
})
