const express = require('express');
const router = express.Router();
const workoutCtrl = require('../controllers/workouts');


router.get('/', workoutCtrl.index)

router.post('/', checkAuth, workoutCtrl.create);

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}


module.exports = router;