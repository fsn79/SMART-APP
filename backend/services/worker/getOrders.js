const { Orders, Items, Infoorders, Employees } = require('../../models/index');
const { Op } = require('sequelize');

async function getOrders(req, res) {
  const { wcCode, wcId } = req.params;
  console.log(req.params);
  Items.hasMany(Orders, { foreignKey: 'itemsid' });
  Orders.belongsTo(Items, { foreignKey: 'itemsid' });
  Orders.hasMany(Infoorders, { foreignKey: 'ordersid' });
  Infoorders.belongsTo(Orders, { foreignKey: 'ordersid' });
  Employees.hasMany(Infoorders, { foreignKey: 'employeesid' });
  Infoorders.belongsTo(Employees, { foreignKey: 'employeesid' });

  try {
    const orders = await Orders.findAll({
      where: {
        [Op.or]: [{ status: 'Created' }, { status: 'Open' }],
      },
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
    console.log(orders);
    res.json({ error: false, message: orders });
  } catch (e) {
    console.log(e);
    res.json({ error: true, message: 'DB error, try again' });
  }
}

module.exports = getOrders;
