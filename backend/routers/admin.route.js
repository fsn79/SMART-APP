const router = require('express').Router();
const createDepartment = require('../controllers/admin/createDepartment');
const createUser = require('../controllers/admin/createUser');
const editDepartment = require('../controllers/admin/editDepartment');
const editUser = require('../controllers/admin/editUser');

router
  .route('/department')
    .post(createDepartment)
    
