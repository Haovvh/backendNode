const express = require('express');
require('dotenv').config();
const compression = require('compression');
const {default: helmet} = require('helmet');
const morgan = require('morgan');

const PORT = process.env.PORT || 3000;

const app = express();

//Init middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

//Init dbs
require('./dbs/init.mongodb');
const {checkOverLoad} = require('./helpers/check.connect');
checkOverLoad();


//Init routes




app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING PORT ${PORT}`);
})