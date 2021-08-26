const router = require('express').Router();
const createOrder = require('../services/manager/createOrder');
const closeOrder = require('../services/worker/closeOrder');
const executionOrder = require('../services/worker/executionOrder');
const executionProgres = require('../services/worker/executionProgres');
const getOrders = require('../services/worker/getOrders');
const getWorkerOrder = require('../services/worker/getWorkerOrder');
const showOrdersList = require('../services/manager/showOrdersList');

router.route('/').post(createOrder);
router.route('/').get(showOrdersList);
router.route('/:wcCode/:wcId').get(getOrders);
router.route('/worker/:userId/:wcCode').get(getWorkerOrder);
router.route('/progressive/').post(executionOrder);
router.route('/progressive/').put(executionProgres);
router.route('/close').put(closeOrder);

module.exports = router;
