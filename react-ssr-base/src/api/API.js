let API_HOST = "http://localhost:3010";

export const API = {
  GET_HOME_LIST: '/api/get_home_list',
}

export const getApi = (api, host = API_HOST) => {
  return host + api;
}

