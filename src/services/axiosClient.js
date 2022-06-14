import axios from "axios";
import LocalStorage from "../constants/LocalStorage";

const axiosOptions = {
  baseURL: "https://kmin-ecommerce-be.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
  },
};
const axiosClient = axios.create(axiosOptions);

//interceptor
axiosClient.interceptors.request.use(
  (request) => {
    if (!request.headers.Authorization) {
      const token = localStorage.getItem(LocalStorage.Auth.token);
      request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
  },
  (error) => Promise.reject(error)
);
axiosClient.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error.response?.data || error)
);

export default axiosClient;
