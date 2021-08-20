const router = require('express').Router();
const logout = require('../controllers/auth/logout');

router
  .route('/logout')
    .get(logout)
