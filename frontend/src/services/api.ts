import axios from "axios";
import { setupInterceptorsTo } from "./axiosInterceptors";

const api = setupInterceptorsTo(axios.create());

export default api;
