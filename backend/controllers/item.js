const router = require('express').Router();
const createItem = require('../services/manager/createProduct');
const editItem = require('../services/manager/editProduct');

module.exports = () => {
  router.route('/').post(createItem);
  router.route('/:id').put(editItem);
}
