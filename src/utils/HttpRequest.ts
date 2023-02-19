import axios from "axios";
const axiosInstance = axios.create({
  withCredentials: true,
});
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { response, config } = error;
    /**
     * silent refresh
     */
    if (response.status === 401 && response.data.code === 3000) {
      await axiosInstance.get("http://localhost:3000/api/v1/regen");
      return axiosInstance(config);
    } else if (response.status === 401 && response.data.code === 4001) {
      window.location.href = "/auth";
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);
export default axiosInstance;
