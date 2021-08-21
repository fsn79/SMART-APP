const router = require('express').Router();
const jwt = require("jsonwebtoken");
const login = require('../controllers/auth/loginUser');
const { authenticateToken, generateAccessToken } = require('../middleware/jwt')
//admin
const createWorkCenter = require('../controllers/admin/createDepartment');
const createUser = require('../controllers/admin/createUser');
const editWorkCenter = require('../controllers/admin/editDepartment');
const editUser = require('../controllers/admin/editUser');
//manager
const createOrder = require('../controllers/manager/createOrder');
const createItem = require('../controllers/manager/createProduct');
const editItem = require('../controllers/manager/editProduct');
//worker
const executionOrder = require('../controllers/worker/executionOrder');
const executionProgres = require('../controllers/worker/executionProgres');
const orders = require('../controllers/worker/getOrders');

router
  .route('/api/wc')
    .post(createWorkCenter)

router
  .route('/api/wc/:id')
    .put(editWorkCenter)

router
  .route('/api/user')
    .post(createUser)

router
  .route('/api/user/:id')
    .put(editUser)

router
  .route('/api/item')
    .post(createItem)

router
  .route('/api/item/:id')
    .put(editItem)

router
  .route('/api/order')
    .post(createOrder)
    .get(orders)

router
  .route('/api/progressive')
    .post(executionOrder)

router
  .route('/api/progressive/:id')
    .put(executionProgres)

router
  .route('/')
    .post(authenticateToken, login)

//для токена
router
  .route('/post')
    .post(async (req, res) => {
      const user = await User.findOne({
        where: { username: req.user.name }
      });
      res.json(user);
    });
//для обновления токена
router
    .route('/token')
      .post(async (req, res) => {
        const refreshToken = req.body.token;
        if (refreshToken === null) return res.sendStatus(401);
        if ( await !refreshTokenDb.findOne() ) return res.sendStatus(403);
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
          if (err) return res.sendStatus(403);
          const accessToken = generateAccessToken({ name: user.name });
          res.json({ accessToken })
        });
      });
// напиши мидлварку bodyParser
// router
//   .route('/refresh')
//     .post(bodyParser(), async (req, res) => {
//       const { refreshToken } = req.body;
//       const dbToken = await refreshToken.findOne({ 
//         where: {
//           token: refreshToken // отдельная таблица для рефреш токенов
//         }
//       });
      
//       if(!dbToken) {
//         return res.status(404).send('не робит')
//       }
//       const newRefreshToken = uuid();
//       // тут добавь в db jwt токенов newRefreshToken
//       req.body = {
//         token: jwt.sign({ id: dbToken.id }, { secret: 'blablabla' }),
//         refreshToken: newRefreshToken
//       }
//     })

module.exports = router
