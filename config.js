const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://www.affirmations.dev/',
  timeout: 2000,
  headers: {
    'Content-Type': 'application/json',
  },
});

module.exports = instance;
