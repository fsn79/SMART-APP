const router = require('express').Router();
const createItem = require('../services/manager/createItem');
const editItem = require('../services/manager/editItem');

router.route('/').post(createItem);
router.route('/:id').put(editItem);

module.exports =router;
