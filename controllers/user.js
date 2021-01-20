let bcrypt = require("bcrypt");
const passport = require('passport');
require('../passport_setup')(passport);
let flash = require('connect-flash');
var UserModel = require("../models/userModel")
//const { isEmpty } = require('lodash');
//const { validateUser } = require('../validators/signup');

exports.show_login = function (req, res, next) {
    res.render('user/login', { formData: {}, errors: {} });
}

exports.show_signup = function (req, res, next) {
    res.render('user/signup', { formData: {}, errors: {} });
}

// const rerender_signup = function (errors, req, res, next) {
//     res.render('user/signup', { formData: req.body, errors: errors });
// }
const generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

exports.signup = function (req, res, next) {
    var user = new User.UserModel({
        email: req.body.email,
        password: generateHash(req.body.password)
    })
    
    user.save().exec( function (err, user) {
        if (err) return done(err);
            passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/signup',
            failureFlash: true
        })(req, res, next);
        return done(null, user);
    });


    // try {
    //     const user = new UserModel.UserModel();
    //     user.email = req.body.email;
    //     user.password = generateHash(req.body.password);

    //     return user.save().then(result => {
    //         passport.authenticate('local', {
    //             successRedirect: '/',
    //             failureRedirect: '/signup',
    //             failureFlash: true
    //         })(req, res, next);
    //     })
    // } catch (error) {
    //     console.log(error)
    //     return res.status(400).send({
    //         message: 'Unable to sign up',
    //         errors: error,
    //         status: 400
    //     })
    // }
}

exports.login = function (req, res, next) {
    passport.authenticate('local', {
        successRedirect: "/",
        failureRedirect: "/login",
        failureFlash: true
    })(req, res, next);
}

exports.logout = function (req, res, next) {
    req.logout();
    req.session.destroy();
    res.redirect('/');
}