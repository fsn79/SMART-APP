require('dotenv').config();
const db = require('../../models');
const bcrypt = require('bcrypt');

async function loginUser(req, res) {
  const { email, password } = req.body;
  try {
    const checkUser = await db.employees.findOne({
      where: {
        email
      }
    });
  } catch (e) {
    res.status(400).json({ massage: 'email already exists' })
  }

  if(checkUser !== null) {
    try {
      const checkPassword = await bcrypt.compare(password, checkUser.password);
    } catch (e) {
      res.status(401).json({ massage: 'Unauthorized' })
    }

    try {
      if(checkUser && checkPassword) {
        if(checkUser.jobtitle === 'admin') {
          const nameOfUser = checkUser.name;
          req.session.user = checkUser;
          res.status(200).json({ masage: 'admin', checkUser });
        };
      }
    } catch (e) {
      res.status(401).json({ massage: 'Unauthorized' })
    }

    try {
      if(checkUser.jobtitle === 'manager') {
        const nameOfUser = checkUser.name;
        req.session.user = checkUser;
        res.status(200).json({ masage: 'manager', checkUser });
      };
    } catch (e) {
      res.status(401).json({ massage: 'Unauthorized' })
    }

    try {
      if(checkUser.jobtitle === 'worker') {
        const nameOfUser = checkUser.name;
        req.session.user = checkUser;
        const listOrders = await db.orders.findAll({
          limit: 10,
          order: [['"priority" DESC'], ['"promiseddate" DESC']],
          include: db.items,
        });
        res.status(200).json({ masage: 'worker', listOrders, checkUser });
      };
    } catch (e) {
      res.status(401).json({ massage: 'Unauthorized' })
    }

    };
  };

module.exports = loginUser;

