const router = require('express').Router();
const logout = require('../services/auth/logout');
const login = require('../services/auth/loginUser');

module.exports = () => {
  router.route('/logout').get(logout);
  router.route('/login').post(login);
}
