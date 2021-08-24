require('dotenv').config();

function logoutUser(req, res) {
  req.session.destroy(() => {
    res
      .clearCookie(process.env.KEY_SESSION)
      .status(200)
      .json({ message: 'logout and clear session'})
  });
};

module.exports = logoutUser;
