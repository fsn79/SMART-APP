const router = require('express').Router();
const login = require('../controllers/auth/loginUser');
//admin
const createWorkCenter = require('../controllers/admin/createDepartment');
const createUser = require('../controllers/admin/createUser');
const editWorkCenter = require('../controllers/admin/editDepartment');
const editUser = require('../controllers/admin/editUser');
//manager
const createOrder = require('../controllers/manager/createOrder');
const createItem = require('../controllers/manager/createProduct');
const editItem = require('../controllers/manager/editProduct');
//worker
const executionOrder = require('../controllers/worker/executionOrder');
const executionProgres = require('../controllers/worker/executionProgres');
const orders = require('../controllers/worker/getOrders');

router
  .route('/api/wc')
    .post(createWorkCenter)
    .put(editWorkCenter)

router
  .route('/api/user')
    .post(createUser)
    .put(editUser)

router
  .route('/api/item')
    .post(createItem)
    .put(editItem)

router
  .route('/api/order')
    .post(createOrder)
    .get(orders)

router
  .route('/api/progressive')
    .post(executionOrder)
    .put(executionProgres)

router
  .route('/')
    .post(login)

module.exports = router
