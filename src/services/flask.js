import axios from 'axios';

const classifyFlask = (req, res) => {
  axios
    .post('https://macroclassifier.herokuapp.com/', {
      url: req.body.url,
    }, {
      'content-type': 'text/plain',
    })
    .then((response) => {
      res.send(JSON.stringify(response.data));
    })
    .catch((error) => {
      res.send(error);
    });
};

export default classifyFlask;
