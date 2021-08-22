const router = require('express').Router();
const createUser = require('../services/admin/createUser');
const editUser = require('../services/admin/editUser');
const allUsers = require('../services/admin/allUsers');

module.exports = () => {
  router.route('/').post(createUser);
  router.route('/:id').put(editUser);
  router.route('/').get(allUsers)
}
