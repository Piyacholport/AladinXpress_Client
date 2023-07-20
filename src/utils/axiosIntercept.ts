import axios, { AxiosRequestConfig, AxiosInstance } from "axios";

type IConfig = AxiosRequestConfig & {};

const requestConfig: IConfig = {
    baseURL: (import.meta.env.VITE_API_URL).replace(" ",""),
    timeout: 10000,
    headers: {
        Authorization: `${localStorage.getItem("auth._token.local")}`,
    },
};

class HttpRequest {
    api: AxiosInstance;

    constructor() {
        this.api = axios.create(requestConfig)

        this.api.interceptors.request.use(
            (config: any) => {
                // console.log(`[Payload]: Request ${config.method.toUpperCase()} ${config.url}`);
                // console.log(config);
                return config;
            }, 
            (error: any) => {
                return Promise.reject(error);
            }
        )
    }

    // post method
    async post(url = '', data: any, config?: any) {
        const headers = { 
            "Content-Type": "application/json" 
        };
        
        const response = await this.api.post(url, data, config || headers);
        return response.data;
    }

    // get method
    async get(url = '', config?: any) {
        const response = await this.api.get(url, config);
        return response.data;
    }
}

export default new HttpRequest();