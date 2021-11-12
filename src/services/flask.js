import axios from 'axios';

const classifyFlask = (req, res) => {
  axios
  /*
    .post('https://macroclassifier.herokuapp.com/', {
      url: req.url,
    })
    */
    .get('https://macroclassifier.herokuapp.com/')
    .then((response) => {
      res.send(JSON.stringify(response.data));
    })
    .catch((error) => {
      res.send(error);
    });
};

export default classifyFlask;
