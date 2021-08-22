const router = require('express').Router();
const createOrder = require('../services/manager/createOrder');
const orders = require('../services/worker/getOrders');
const executionOrder = require('../services/worker/executionOrder');
const executionProgres = require('../services/worker/executionProgres');

module.exports = () => {
  router.route('/').post(createOrder);
  router.route('/orders').post(orders);
  router.route('/progressive/:id').post(executionOrder);
  router.route('/progressive/:id').put(executionProgres);
}
