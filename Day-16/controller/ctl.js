const fSchema = require('../model/fschema');


module.exports.dashboard = (req, res) => {
    res.render("dashboard");
}

module.exports.addAdmin = (req, res) => {
    res.render("addAdmin");
}

module.exports.table = async(req, res) => {
    await fSchema.find({}).then((data) => {
    res.render("table", { data });

    })
}

module.exports.add = async(req, res) => {
    await fSchema.create(req.body).then(() => { 
        res.redirect('/table');
    })    
}


module.exports.delete = async(req, res) => {
    await fSchema.findByIdAndDelete(req.query.id).then(()=>{
            res.redirect("/table");
        })
}