import axios from 'axios';
import React from 'react';
import { css } from '@emotion/react';

const api = axios.create({
    baseURL: 'http://localhost:8081/api/'
})

let headers = new Headers();

headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');

headers.append('Access-Control-Allow-Origin', 'http://localhost:8082');
headers.append('Access-Control-Allow-Credentials', 'true');

    const login = async () => {
        axios({
          method: 'post',     //put
          //url: 'https://license-cors-proxy.herokuapp.com/http://localhost:8081/api/login',
          url: 'https://license-cors-proxy.herokuapp.com/http://www.google.com',
          headers: {},
          data: {
             username: 'beni',
             password: '0000'
          }
        })
        .then(res => {
          console.log("res", res.data.message);
        })
        .catch(err => {
          console.log("error in request", err);
        });
    };

    export default login;


/*
axios({
  method: 'post',     //put
  url: url,
  headers: {'Authorization': 'Bearer'+token},
  data: {
     firstName: 'Keshav', // This is the body part
     lastName: 'Gera'
  }
});


          X-Content-Type-Options: 'nosniff',
          X-XSS-Protection: '1; mode=block',
          Cache-Control: 'no-cache, no-store, max-age=0, must-revalidate',
          Pragma: 'no-cache',
          Expires: '0',
          X-Frame-Options: 'DENY',
          Content-Type: 'application/json',
          Content-Length: '418',
          Date: 'Thu, 18 Nov 2021 08:32:56 GMT',
          Keep-Alive: 'timeout=60',
          Connection: 'keep-alive'
*/