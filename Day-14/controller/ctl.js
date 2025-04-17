let fschema = require('../model/firstSchema.js');



module.exports.firstPage = (req, res) => {
    res.render('index');
}

module.exports.add = async(req, res) => {
    await fschema.create(req.body).then(() => { 
        res.redirect('/');
    })
}