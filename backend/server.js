'use strict';

const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 4000;

//routes
const mainRouter = require('./routers/main.route'); //have login
const logoutRouter = require('./routers/auth.route');

//middleware
app.use(express.static(path.join(__dirname, 'backend/public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//middleware routes
app.use('/', mainRouter);
app.use('/logout', logoutRouter);

app.listen(PORT, () => {
  console.log(`>> server started PORT: ${PORT}`);
});
