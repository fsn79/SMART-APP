const db = require('../../models')
async function allWorkCenters(req, res) {
  const listUsers = await db.Workcenters.findAll()
  res.status(200).json(listUsers)
}

module.exports = allWorkCenters;
