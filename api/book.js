import axios from 'axios'

export default {
  getFromFile(url) {
    return new Promise((resolve, reject) => {
      axios(url).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  },
}