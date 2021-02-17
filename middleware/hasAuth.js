let createError = require('http-errors')

exports.isLoggedIn= function(req,res,next){
    if(req.user){
        next()
    }else{
        next(createError(404,"You are not permitted to acces this page"))
    }
}