import axios from 'axios';
import mpAdapter from 'axios-miniprogram-adapter';

axios.defaults.adapter = mpAdapter;

// axios.defaults.baseURL = "production" === process.env.NODE_ENV ? "http://robot.cpay.life" : "http://wlapi.cpay.life";
axios.defaults.baseURL = "https://xiaopingdu.com";
axios.defaults.timeout = 8000;

// 添加请求拦截器
axios.interceptors.request.use(
    config => {
        // console.log(config);
        // let token = HttpAxios.Token;
        // let appkey = HttpAxios.AppKey;
        // Object.assign(config.headers, {token, appkey});
        // config.data = qs.stringify(config.data);
        // config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 添加响应拦截器
axios.interceptors.response.use(
    response => {
        // console.error(response);
        let {status, statusText, data} = response;
        let {code, message} = data;

        if (200 === status) {
            if (code) return Promise.reject(new Error(`${message}`));
            else return Promise.resolve(data);
        } else {
            let error = new Error(`${statusText}`);
            return Promise.reject(error);
        }
    },
    error => {
        return Promise.reject(error);
    }
);

class XpdNet {

    getWeather() {
        return axios.get("api/weather");
    }

}

export default new XpdNet();