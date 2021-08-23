const db = require('../../models/index');

async function createWorkCenter(req, res) {
  const { name, code, capacity } = req.body;
  const newWorkCenter = await db.workcenters.create({
    name,
    code,
    capacity,
  })

  res.status(200).json({ newWorkCenter })
};

module.exports = createWorkCenter;
