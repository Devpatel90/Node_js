const express = require("express");
const route = express.Router();
const ctl = require("../controller/ctl");
const middleware = require("../middleware/multer");
const passportSt = require("../middleware/passport_strategy");

route.get("/",ctl.login);
route.post("/loginData",passportSt.authenticate("local",{failureRedirect: "/"}),ctl.loginData);
route.get("/logout",ctl.logout);
route.get("/dashboard",passportSt.checkAuth,ctl.dashboard);

route.get("/addAdmin",ctl.addAdmin);
route.get("/viewAdmin",ctl.viewAdmin);

route.get("/editRecord",passportSt.checkAuth,ctl.editAdmin);
route.get("/deleteRecord",passportSt.checkAuth,ctl.deleteRecord);
route.post("/addRecord",middleware,ctl.addRecord);
route.post("/updateRecord",middleware,ctl.updateRecord);

route.get("/profile",passportSt.checkAuth,ctl.profile);

module.exports = route;