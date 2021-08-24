const router = require('express').Router();
const createOrder = require('../services/manager/createOrder');
const executionOrder = require('../services/worker/executionOrder');
const executionProgres = require('../services/worker/executionProgres');
const getOrders = require('../services/worker/getOrders');

router.route('/').post(createOrder);
router.route('/:wcCode').get(getOrders);
router.route('/progressive/:id').post(executionOrder);
router.route('/progressive/:id').put(executionProgres);

module.exports = router;
