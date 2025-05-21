const passort = require("passport");
const localst = require("passport-local").Strategy;
const fschema = require("../model/fschema")

passort.use("local",new localst(
    {usernameField: "email"},
    async (email,password,done) => {
        let admin = await fschema.findOne({email:  email});
        if(admin){
            if(admin.password === password){
                return done(null,admin);
            }else{
                return done(null,false);
            }
        }
        else{
            return done(null,false);
        }

    }   
))

passort.serializeUser((admin,done) => {
    done(null,admin.id);
})

passort.deserializeUser(async(adminId,done) => {
    let admin = await fschema.findById(adminId);
    if(admin){
        return done(null,admin);
    }else{
        return done(null,false);
    }

})

module.exports = passort;