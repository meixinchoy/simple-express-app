const passport = require("passport");
const myPassport= require('../passport_setup')
let bcrypt = require('bcrypt')


var Lead = require("../models/leadsModel")

const generateHash= function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8),null)
}

exports.signupUserAcc = async (req, res, next) => {
    try {
        const user = new Lead.leadModel();
        user.email = req.body.email;
        user.password = generateHash(req.body.password);
        
        return await user.save().then( result=>{
            passport.authenticate('local',{
            successRedirect: "/",
            failureRedirect:"/signup",
            failureFlash:true
            })(req,res,next);
        })
    } catch (error) {
        console.log(error)
        return res.status(400).send({
            message: 'Unable to sign up',
            errors: error,
            status: 400
        })
    }
}