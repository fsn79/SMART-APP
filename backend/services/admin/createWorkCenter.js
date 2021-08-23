const db = require('../../models');

async function createWorkCenter(req, res) {
  const { name, code, capacity } = req.body;
  const newWorkCenter = await db.Workcenters.create({
    name,
    code,
    capacity,
  })

  res.status(200).json({ newWorkCenter })
};

module.exports = createWorkCenter;
