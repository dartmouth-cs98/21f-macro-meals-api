import axios from 'axios';

const classifyFlask = () => {
  axios
    .get('https://macroclassifier.herokuapp.com/')
    .then((response) => {
      return JSON.stringify(response.data);
    })
    .catch((error) => {
      return JSON.stringify(error);
    });
};

export default classifyFlask;
