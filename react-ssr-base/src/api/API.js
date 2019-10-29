import axios from 'axios';

let API_HOST = "http://localhost:3010";

export const API = {
  GET_HOME_LIST: '/api/get_home_list',
  LOGIN:'/api/login',
  LOGOUT:'/api/logout',
  TRANSLATE:"/api/translate"
}

export const apiInstance = axios.create({
  baseURL:API_HOST
})
