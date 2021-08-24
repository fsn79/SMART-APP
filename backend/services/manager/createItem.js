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
  
  if(name &&
    partnumber &&
    description &&
    workcenter1 &&
    descrroute1 &&
    cycletime1 &&
    workcenter2 &&
    descrroute2 &&
    cycletime2 &&
    workcenter3 &&
    descrroute3 &&
    cycletime3
    ) {
      try {
        const [newItem, created] = await db.Items.findOrCreate({
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
        });
        created
          ? res.json({ error: false, message: `Item was created. ID: ${newItem.id}` })
          : res.json({ error: true, message: `Partnumber (${partnumber}) is already exist` });
      } catch (e) {
        console.log(e);
        res.json({ error: true, message: 'DB error, try again' });
      }
    } else {
      res.json({ error: true, message: 'All fields must be require' });
    };
};

module.exports = createProduct;
