import axios from 'axios';

const classifyFlask = (req, res) => {
  axios
    .post('http://127.0.0.1:5000/', {
      url: req.body.url,
    })
    .then((response) => {
      res.send(JSON.stringify(response.data));
    })
    .catch((error) => {
      res.send(error);
    });
};

export default classifyFlask;
