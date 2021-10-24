import axios from 'axios';

axios
  .get('https://macroclassifier.herokuapp.com/')
  .then((response) => {
    return JSON.stringify(response.data);
  })
  .catch((error) => {
    return JSON.stringify(error);
  });
