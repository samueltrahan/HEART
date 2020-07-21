const axios = require('axios');

module.exports = {
    getRecipes
}

function getRecipes(req, res) {
    axios.get(`https://api.edamam.com/search?q=${req.body.query}&app_id=${process.env.APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`)
    .then(response => {res.json(response.hits)})
}