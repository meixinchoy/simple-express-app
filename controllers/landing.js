var userController = require("./userController")

exports.get_landing = function (req, res, next) {
    res.render('landing', { title: 'Express' });
}

exports.submit_lead = function (req, res, next) {
    console.log("lead email", req.body.lead_email);
    userController.postUserDetail(req, res);
}

exports.show_leads = function (req, res, next) {
    userController.getUsers(req, res);
}

exports.show_indiLeads = function (req, res, next) {
    userController.getOneUser(req, res);
}