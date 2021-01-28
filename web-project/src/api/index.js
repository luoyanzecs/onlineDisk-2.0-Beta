import axios from "axios";

///home/multidata

export function request(config){
  const instance = axios.create({
    baseURL: 'http://localhost:80',
    timeout: 60000
  });
  return instance(config);
}


