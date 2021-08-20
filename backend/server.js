'use strict';

const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 4000;

//routes
const mainRouter = require('./routes/main'); //have login
const logoutRouter = require('./routes/logout');
const adminRouter = require('./routes/admin');
const managerRouter = require('./routes/manager');
const workerRouter = require('./routes/worker');

//middleware
app.use(express.static(path.join(__dirname, 'backend/public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//middleware routes
app.use('/', mainRouter);
app.use('/logout', logoutRouter);
// app.use('/admin', adminRouter);
// app.use('/manager', managerRouter);
// app.use('/worker', workerRouter);

app.listen(PORT, () => {
  console.log(`>> server started PORT: ${PORT}`);
});
