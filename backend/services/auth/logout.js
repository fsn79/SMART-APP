require('dotenv').config();

async function logoutUser(req, res) {
  res.clearCookie(process.env.KEY_SESSION);
  req.session = null;
  res.redirect('/');
};

module.exports = logoutUser;
