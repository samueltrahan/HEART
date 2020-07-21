const router = require('express').Router();
const recipesCtrl = require('../../controllers/recipes')


router.post('/recipes', recipesCtrl.getRecipes);


module.exports = router