const express = require('express');

const route = express.Router();
const ctl = require('../controller/ctl');

route.get('/', ctl.create);

route.get("/addbook", ctl.addBook);

route.post("/setbook", ctl.add);

route.get("/delbook", ctl.delete);

route.get("/editbook",ctl.edit);

route.post("/updatebook",ctl.update);

module.exports = route;