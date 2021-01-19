var userAccController = require("./userAccController")

exports.show_login = function (req, res, next) {
    res.render('user/login',{formData:{},errors:{}})
}

exports.show_signup = function (req, res, next) {
    res.render('user/signup', { formData: {}, errors: {} })
}

exports.signup = function (req, res, next) {
    userAccController.signupUserAcc(req, res, next)
}

exports.login = function (req, res, next) {
    res.render('user/signup', { formData: {}, errors: {} })
}