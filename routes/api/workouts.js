const express = require('express');
const router = express.Router();
const workoutCtrl = require('../../controllers/workouts');


router.get('/',  workoutCtrl.index)

router.use(require('../../config/auth'))

router.post('/', checkAuth, workoutCtrl.create);
router.delete('/:id', checkAuth, workoutCtrl.delete);


function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}


module.exports = router;