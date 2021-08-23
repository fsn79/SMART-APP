const router = require('express').Router();
const createWorkCenter = require('../services/admin/createWorkCenter');
const editWorkCenter = require('../services/admin/editWorkCenter');
const allWorkCenters = require('../services/admin/allWorkCenters');

router.route('/').post(createWorkCenter);
router.route('/:id').put(editWorkCenter);
router.route('/').get(allWorkCenters);

module.exports = router;
