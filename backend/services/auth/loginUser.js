require('dotenv').config();
const db = require('../../models');
const bcrypt = require('bcrypt');

async function loginUser(req, res) {
  const { email, password } = req.body;

  if(email && password) {
    try {
      console.log('ищю');
      const checkUser = await db.Employees.findOne({
        where: {
          email
        }
      });

      if(checkUser !== null) {
        console.log('нашел пользователя');
        const checkPassword = await bcrypt.compare(password, checkUser.password);
        if(checkUser && checkPassword) {
          req.session.user = checkUser;
          res.status(200).json({ error: false, message: {id: checkUser.id, name: checkUser.firstname, jobtitle: checkUser.jobtitle} });
        } else {
          res.status(401).json({ error: true, message: 'Authorisation error' });
        };
      } else {
        res.status(401).json({ error: true, message: 'Authorisation error' })
      };
    } catch (e) {
      res.status(401).json({ massage: 'Unauthorized' });
    };
  };
};

module.exports = loginUser;

