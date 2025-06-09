const expresss = require('express');

const route = expresss.Router();

const ctl = require('../controllers/ctl');
const verifyToken = require('../Middleware/verifyToken');

route.post('/register', ctl.register);
route.post('/login', ctl.login);  
route.get('/admins',ctl.admins)
// route.post('/adminPass',verifyToken,ctl.adminPass)
route.post('/addManager',verifyToken, ctl.addManagers)  
route.get('/managers', ctl.managers)  
// route.delete('/managers/:id',ctl.managerdel)
// route.put('/employee/:id', ctl.updateEmp);

module.exports = route;