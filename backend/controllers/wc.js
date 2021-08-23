const router = require('express').Router();
const createWorkCenter = require('../services/admin/createWorkCenter');
const editWorkCenter = require('../services/admin/editWorkCenter');

router.route('/').post(createWorkCenter);
router.route('/:id').put(editWorkCenter);

module.exports = router
