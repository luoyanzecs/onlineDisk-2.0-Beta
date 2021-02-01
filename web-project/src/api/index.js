import axios from "axios";

///home/multidata

export function request(config){
  const instance = axios.create({
    baseURL: 'http://localhost:80',
    timeout: 60000,
    // method: 'POST',
  });
  return instance(config);
}

export function createRsaKey() {

}

export function encrypt(data, key){

}

export function decrypt(data, key){

}

