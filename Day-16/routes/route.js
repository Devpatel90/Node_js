const express = require('express');

const route = express.Router();
const ctl = require('../controller/ctl');

route.get('/', ctl.dashboard);

route.get('/addAdmin', ctl.addAdmin);

route.get('/table', ctl.table);

route.post('/addrecord', ctl.add);

route.get("/deldata",ctl.delete);

module.exports = route;