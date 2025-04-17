const fSchema = require('../model/fschema');


module.exports.create = async(req, res) => {
    await fSchema.find({}).then((book)=>{
        // console.log(book);
        res.render("index",{book})
    })
}

module.exports.addBook = (req, res) => {
    res.render("add");
}

module.exports.add = async(req, res) => {
    await fSchema.create(req.body).then(() => { 
        res.redirect('/');
    })    
}

module.exports.delete = async(req, res) => {
    await fSchema.findByIdAndDelete(req.query.id).then(()=>{
            res.redirect("/");
        })
}

module.exports.edit = async(req,res)=>{
    let data = await fSchema.findById(req.query.id);
    res.render("edit",{data})
}

module.exports.update = async(req,res)=>{
    await fSchema.findByIdAndUpdate(req.body.id,req.body).then(()=>{
        res.redirect("/")
    })
}