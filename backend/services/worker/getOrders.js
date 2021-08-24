const { Orders, Items } = require('../../models/index');
const { Op } = require('sequelize');

async function getOrders(req, res) {
  const { wcCode } = req.params;
  Items.hasMany(Orders, { foreignKey: 'itemsid' });
  Orders.belongsTo(Items, { foreignKey: 'itemsid' });
  try {
    const orders = await Orders.findAll({
      raw: true,
      order: [['priority', 'DESC']],
      include: [
        {
          model: Items,
          where: {
            [Op.or]: [
              { workcenter1: wcCode },
              { workcenter2: wcCode },
              { workcenter3: wcCode },
            ],
          },
        },
      ],
    });
    res.json({ error: false, message: orders });
  } catch (e) {
    console.log(e);
    res.json({ error: true, message: 'DB error, try again' });
  }
}

module.exports = getOrders;
