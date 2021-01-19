import axios, {Method} from 'axios';
type RequestParam = {
    method?: Method;
    url:string;
    data?: object | string;
    params?: object;
    headers?:object;
}

export const BASE_URL = 'http://localhost:8080'

export const makeRequest = ({method = 'GET', url, data, params, headers}: RequestParam) => {
    return axios({
        method,
        url:`${BASE_URL}${url}`,
        data,
        params,
        headers
    });
};