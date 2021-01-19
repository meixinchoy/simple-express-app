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

exports.show_editLeads = function (req, res, next) {
    userController.editUser(req, res);
}

exports.submit_editedLead = function (req, res, next) {
    userController.postEditedUser(req, res);
}

exports.submit_deleteLead = function (req, res, next) {
    userController.deleteUser(req, res);
}