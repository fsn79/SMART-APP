const db = require('../../models/index')

async function allUsers(req, res) {
  const listUsers = await db.Employees.findAll()
  res.status(200).json(listUsers)
}

module.exports = allUsers;
