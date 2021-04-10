const { Router }    = require('express');

const route         = Router();
const user          = require('./user');

route.use('/user', user({ route }));

module.exports  = route;