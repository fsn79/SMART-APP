const router = require('express').Router();
const createOrder = require('../services/manager/createOrder');
const executionOrder = require('../services/worker/executionOrder');
const executionProgres = require('../services/worker/executionProgres');
const getOrders = require('../services/worker/getOrders');
const getWorkerOrder = require('../services/worker/getWorkerOrder');

router.route('/').post(createOrder);
router.route('/:wcCode').get(getOrders);
router.route('/worker/:userId/:wcCode').get(getWorkerOrder);
router.route('/progressive/').post(executionOrder);
router.route('/progressive/').put(executionProgres);

module.exports = router;
