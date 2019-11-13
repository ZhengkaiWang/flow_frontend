import axios from 'axios'
import qs from 'qs'
import Cookies from 'js-cookie'

//axios.defaults.withCredentials=true;
const pkgAxios = axios.create({
    baseURL: 'http://106.14.218.63:8000/api/v1/flow',  
    timeout: 500000,
    withCredentials: true,
})

pkgAxios.interceptors.request.use(config => {
    config.method === 'post' || config.method === 'patch' || config.method === 'put'
        ? config.data = qs.stringify({...config.data})
        : config.params = {...config.params};
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    config.headers['X-CSRFToken'] = Cookies.get('csrftoken')
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