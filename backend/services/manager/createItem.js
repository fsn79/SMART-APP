const db = require('../../models/index')

async function createProduct(req, res) {
  const {
    name,
    partnumber,
    description,
    workcenter1,
    descrroute1,
    cycletime1,
    workcenter2,
    descrroute2,
    cycletime2,
    workcenter3,
    descrroute3,
    cycletime3,
  } = req.body;
  
    console.log(Object.keys(db));
    const newItem = await db.items.create({
      name,
      partnumber,
      description,
      workcenter1,
      descrroute1,
      cycletime1,
      workcenter2,
      descrroute2,
      cycletime2,
      workcenter3,
      descrroute3,
      cycletime3,
    })
    res.status(200).json({ newItem })
};

module.exports = createProduct;
