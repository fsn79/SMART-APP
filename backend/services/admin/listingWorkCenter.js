const { Workcenters } = require('../../models');

async function listingWorkCenters(req, res) {
  try {
    const db = await Workcenters.findAll({ raw: true, exclude: ['updatedAt'] });
    res.json({ error: false, message: db });
  } catch (e) {
    res.json({ error: true, message: e.message });
  }
}

module.exports = listingWorkCenters;
