import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID WeUmn50MXo6xpfROS_EXjv6D7x9fg9BZ0MeQmnQbBbc'
    }
});