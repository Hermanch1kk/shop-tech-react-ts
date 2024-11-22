import axios from "axios";
import { IProductDto } from "../types/product";
import { getTokenFromLocalStorage } from "../helper/localStorage.helper";
const urlAPI = 'https://webapi-shoptech-pv321-hxc4cna7gab9ghhc.westeurope-01.azurewebsites.net/api/';
// const urlAPI='https://localhost:7262/api/';

export const instance = axios.create({
  baseURL: urlAPI,
  // timeout: 5000,
  withCredentials: false, // дефолтне значення

});


// Додати перехоплювач запиту => який до кожного запиту додасть token із loaclStorage
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  });



