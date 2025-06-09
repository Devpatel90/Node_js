const expresss = require('express');

const route = expresss.Router();

const ctl = require('../controllers/ctl');
const managerctl = require('../controllers/managerctl')
const verifyToken = require('../Middleware/verifyToken');

route.post('/managerLogin', managerctl.managerLogin);

module.exports = route;