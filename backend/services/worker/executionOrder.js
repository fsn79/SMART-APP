const { Orders, Infoorders } = require('../../models/index');
async function executionOrder(req, res) {
  const { orderId, userId } = req.body;
  const order = await Orders.findByPk(orderId, { raw: true });
  const [workerOrder, created] = await Infoorders.findOrCreate({
    where: { employeesid: userId, status: 'Open' },
    defaults: {
      employeesid: userId,
      ordersid: order.id,
      quatitycomplete: 0,
      quantitydefect: 0,
    },
    raw: true,
  });
  //
}

module.exports = executionOrder;
