let LocalStrategy = require('passport-local').Strategy;
var User = require("./models/userModel")

let bcrypt = require('bcrypt');

//API calls

const validPassword = function (user, password) {
    return bcrypt.compareSync(password, user.password);
}

module.exports = function (passport) {
    passport.serializeUser(function (user, done) {
        done(null, user._id)
    });
    passport.deserializeUser(function (_id, done) {
        User.UserModel.findById(_id, (err,user)=>{
            if(err){
                done(null,false,{error:err});
            }else{
                done(null,user)
            }
        })
    });
    passport.use('local',new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
        function (req, email, password, done) {
            User.UserModel.findOne({
                'email': email
            }, function (err, user) {
                if (err) return done(err);
                if (user.email == null) {
                    req.flash('message', 'Incorrect credentials.')
                    return done(null, false)
                } else if (user.password == null || user.password == undefined) {
                    req.flash('message', 'You must reset your password')
                    return done(null, false)
                } else if (!validPassword(user, password)) {
                    req.flash('message', 'Incorrect credentials')
                    return done(null, false)
                }
                return done(null, user);
            });
        }));
}