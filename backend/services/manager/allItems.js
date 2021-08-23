const db = require('../../models/index')
async function allItems(req, res) {
  const allItems = await db.items.findAll()
  res.status(200).json(allItems)
}

module.exports = allItems;
