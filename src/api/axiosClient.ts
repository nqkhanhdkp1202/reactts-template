import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: {
    serialize: (params) =>
      queryString.stringify(params, { arrayFormat: "bracket" }),
  },
});

axios.interceptors.request.use(
  (config) => {
    let accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
