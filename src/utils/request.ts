import axios from 'axios';

const request = (url = '', method: string, data = {}, config = {}) => {
    switch (method) {
        case 'get':
            return axios({
                url,
                method,
                params: data,
                ...config,
            });
        case 'post':
            return axios({
                url,
                method,
                data,
                ...config,
            });
        default:
            return axios(config);
    }
};

export default request;
