const axios = require('axios')

const api = (configuration) => {
    return axios.create({
        baseURL:configuration.baseURL
    })
}

module.exports = api;

