require('dotenv').config();
const { generateAccessToken } = require('../../middleware/jwt');
const jwt = require('jsonwebtoken');

function loginUser(req, res) {
  const { username } = req.body;
  const user = { name: username };

  const accessToken = generateAccessToken(user);
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
  //тут надо в базе токенов создать рефрешТокен
  // refreshTokenDb.create({
  //   token: refreshToken
  // })
  res.json({ accessToken, refreshToken })

};

module.exports = loginUser;

