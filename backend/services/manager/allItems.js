const db = require('../../models/index')
async function allItems(req, res) {
  try {
    const allItems = await db.items.findAll()
    res.status(200).json({ error: false, allItems })
  } catch (e) {
    res.status(404).json({ error: true, message: 'DB error, try again' })
  };
};

module.exports = allItems;
