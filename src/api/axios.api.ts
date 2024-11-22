import axios from "axios";
import { getTokenFromLocalStorage } from "../helper/localStorage.helper";
// import axios from "axios";
// import { IProductDto } from "../types/product";
// import { getTokenFromLocalStorage } from "../helper/localStorage.helper";
const urlAPI='https://webapi-shoptech-pv321-hxc4cna7gab9ghhc.westeurope-01.azurewebsites.net/api/';
// // const urlAPI='https://localhost:7262/api/';



const instance = axios.create({
  // до запиту буде прикріплюватися cookies
  withCredentials: false,
  baseURL: urlAPI
});


// який до кожного запиту додасть token із localStorage
instance.interceptors.request.use(
  (config) => {
    const token = getTokenFromLocalStorage();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);


export default instance;

