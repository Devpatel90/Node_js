const express = require('express');

const route = express.Router();
const ctl = require('../controller/ctl');

route.get('/', ctl.firstPage);

route.post("/add",ctl.add);

module.exports = router;