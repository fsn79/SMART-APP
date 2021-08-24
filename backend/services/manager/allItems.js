const { Items } = require('../../models/index');
async function allItems(req, res) {
  try {
    const allItems = await Items.findAll({ raw: true, where: { status: true } });
    res.json({ error: false, message: allItems });
  } catch (e) {
    res.json({ error: true, message: 'DB error, try again' });
  }
}

module.exports = allItems;
