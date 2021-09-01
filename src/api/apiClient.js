import axios from "axios";
import { API_BASE_URI } from "@env";

const apiClient = axios.create({
  baseURL: API_BASE_URI,
  headers: {
    "content-type": "application/json",
  },
});

apiClient.interceptors.response.use(
  response => {
    if (response && response.data) return response.data;
    return response;
  },
  error => {
    return Promise.reject(error.response);
  }
);

export default apiClient;
