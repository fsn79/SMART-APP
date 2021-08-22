const db = require('../../models/index')
async function allUsers(req, res) {
  // console.log(Object.keys(db));
  const listUsers = await db.employees.findAll()
  res.status(200).json(listUsers)
}

module.exports = allUsers;
