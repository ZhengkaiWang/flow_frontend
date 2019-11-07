import axios from 'axios'
import qs from 'qs'

//axios.defaults.withCredentials=true;
const pkgAxios = axios.create({
    baseURL: 'http://127.0.0.1:8080/api/v1/flow/',  
    timeout: 500000,
    withCredentials: true,
})

pkgAxios.interceptors.request.use(config => {
    config.method === 'post' || config.method === 'patch' || config.method === 'put'
        ? config.data = qs.stringify({...config.data})
        : config.params = {...config.params};
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    //config.headers['Content-Type'] = 'multipart/form-data'
    return config;
}, error => {
    Promise.reject(error)
})

pkgAxios.interceptors.response.use(
    response => {
        return response
    },
    error => {
        return Promise.reject(error)
    }
)

export default pkgAxios