import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

const onRequest = async (
  config: AxiosRequestConfig
): Promise<AxiosRequestConfig<any>> => {
  console.log("onRequest");
  try {
    const response = await axios.get("http://localhost:5000/token");
    if (config.headers) {
      config.headers.Authorization = `Bearer ${response.data.accessToken}`;
    }

    return config;
  } catch (error) {
    return Promise.reject(error);
  }
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  console.log("onRequestError");
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  console.log("onResponse");
  return response;
};

const onResponseError = async (error: AxiosError): Promise<AxiosError> => {
  console.log("onResponseError");
  if (error.response) {
    // Access Token was expired
    if (error.response.status === 401) {
      try {
        const response = await axios.get("http://localhost:5000/token");

        return response.data;
      } catch (_error) {
        return Promise.reject(_error);
      }
    }
  }
  return Promise.reject(error);
};

export const setupInterceptorsTo = (
  axiosInstance: AxiosInstance
): AxiosInstance => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
};
