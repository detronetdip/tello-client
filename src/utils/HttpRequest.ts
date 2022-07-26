import axios from "axios";
import { SERVER_ADDRESS } from "./globalEnv";
export default axios.create({
  baseURL: SERVER_ADDRESS,
  withCredentials: true,
});
