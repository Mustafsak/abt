import axios from 'axios';

const insta = axios.create({
  baseURL: 'https://api.instagram.com/',
  headers: {
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  }
});

export default {
  getOauth() {
    return new Promise((resolve, reject) => {
      insta.get('oauth/authorize/', {
        data: {
          client_id: 'c098cb0300da4b7fbe59b45db2ce4f11',
          response_type: 'token'
        }
      }).then((response) => {
            resolve(response);
          }).catch((error) => {
            reject(error);
          });
    });
  },
}