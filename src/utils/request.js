import axios from "axios";
import config from "../utils/config";
const fetch = options => {
  options.method = options.method || "get";
  // options.baseURL = config.api;
  return axios(options);
};
export default function request(options) {
  return fetch(options)
    .then(res => {
      let {
        status,
        statusText,
        data: { message, status_code, data }
      } = res;
      let meta = Array.isArray(data) ? { list: data } : data;
      return new Promise((resolve, reject) => {
        if (status != 0) {
          return resolve({
            message: message,
            code: status_code,
            data,
            ...meta
          });
        }
        return resolve({
          message: statusText,
          code: status,
          data,
          ...meta
        });
      });
    })
    .catch(err => {
      console.log(options,err,'-----------')
      return new Promise((resolve,reject)=>{
          return resolve({
            message:'not net work',
            code:'30001',
            data:[]
          })
      })
    });
}
