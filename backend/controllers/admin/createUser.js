const db = require('../models');
const bcrypt = require('bcrypt');

function createUser(req, res) {
  const { lastname, firstname, email, password, position } = req.body;

  const checkUser = await db.Employees.findOne({
    where: {
      email
    }
  });

  if (checkUser) {
    res.json({ message: 'This email is already in use!' });
  } else {
    try {
      // const hashPass = await bcrypt.hash(password, 10);

      const user = await db.Employees.create({
        lastname,
        firstname,
        email,
        password, //: hashPass,
        position
      });

      // формирование сессии, user добавляется в неё как объект
      // req.session.user = user;
      res.json({ user });
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = createUser;
