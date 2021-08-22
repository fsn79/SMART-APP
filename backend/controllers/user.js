const router = require('express').Router();
const createUser = require('../services/admin/createUser');
const editUser = require('../services/admin/editUser');

module.exports = () => {
  router.route('/').post(createUser);
  router.route('/:id').put(editUser);
}
