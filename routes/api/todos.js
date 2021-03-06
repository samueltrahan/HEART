const express = require('express');
const router = express.Router();
const todosCtrl = require('../../controllers/todos');


router.get('/', todosCtrl.index)
router.use(require('../../config/auth'))
router.post('/', checkAuth, todosCtrl.create);
router.delete('/:id', checkAuth, todosCtrl.delete);
router.put('/:id', checkAuth, todosCtrl.update);

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}


module.exports = router;