
async function logoutUser(req, res) {
  //надо удалить из db токен
  refreshTokenFromDb = await refreshTokenDb.findOne();
  if(refreshToken !== refreshTokenFromDb) return res.sendStatus(204);

};

module.exports = logoutUser;
