const express = require('express'); 

const multer = require('../middleware/multer');

const route = express.Router();
const ctl = require('../controller/ctl');

route.get("/", ctl.dash);

route.get("/add", ctl.addadmin);

route.get("/view", ctl.view);   

route.post("/addrecord",multer, ctl.add);

route.get("/deldata",ctl.delete);


route.get("/editdata",ctl.edit);

route.post("/updaterec",multer,ctl.update);



module.exports = route;