import { API_URL } from "@/config/variavel-ambientes";
// import { getAccesstoken } from "@/hooks/storage";
import axios from "axios";

const URL = API_URL;

const API = axios.create({
  baseURL: URL, // Use the API_URL constant if needed
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar" },
});

// API.interceptors.request.use(async (config) => {
//   const token = await getAccesstoken();
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// API.interceptors.response.use(
//   (res) => res,
//   async (err) => {
//     if (err.response.status == 401) {
//       const res = await axios.post('/refresh', {}, { withCredentials: true })
//       const newToken = res.data.access_token
//       await saveAccesstoken(newToken)
//       err.config.headers.Authorization = `Bearer ${newToken}`
//       return axios(err.config)
//     }
//     return Promise.reject(err)
//   }
// )

export { API };
