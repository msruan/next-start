import axios from "axios";
const baseURL = "https://jsonplaceholder.typicode.com/posts";

export const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-type": "application/json",
  },
});

export default axiosInstance;
