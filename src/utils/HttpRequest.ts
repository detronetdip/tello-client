import axios from "axios";
import { SERVER_ADDRESS } from "./globalEnv";
const axiosInstance = axios.create({
  baseURL: SERVER_ADDRESS,
  withCredentials: true,
});
axiosInstance.interceptors.response.use(
   (response)=>{
    return response;
  },
   (error)=>{
    console.log(error, "http error");
    /**
     * silent refresh will be implemented
     */
    return Promise.reject(error);
  }
);
export default axiosInstance;
