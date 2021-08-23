require('dotenv').config();

async function logoutUser(req, res) {
  res.clearCookie(process.env.KEY_SESSION);
  req.session = null;
  res.status(200).json({ massage: 'logout and clear session'})
};

module.exports = logoutUser;
