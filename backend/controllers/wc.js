const router = require('express').Router();
const createWorkCenter = require('../services/admin/createDepartment');
const editWorkCenter = require('../services/admin/editDepartment');

module.exports = () => {
  router.route('/').post(createWorkCenter);
  router.route('/:id').put(editWorkCenter);
}
