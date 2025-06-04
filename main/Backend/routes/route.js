const expresss = require('express');

const route = expresss.Router();

const ctl = require('../controllers/ctl');

route.post('/register', ctl.register);
route.post('/login', ctl.login);  
route.post('/addEmployee', ctl.addEmp)  
route.get('/employee',ctl.emp)
route.delete('/employee/:id',ctl.empdel)
route.put('/employee/:id', ctl.updateEmp);

module.exports = route;