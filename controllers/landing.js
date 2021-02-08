var userController = require("./userController")
var UploadModel = require("../models/imageModel")

exports.get_landing = async function (req, res, next) {
    const all_images = await UploadModel.find()
    res.render('landing', { title: 'Express', user: req.user, images: all_images });
}

exports.submit_lead = function (req, res, next) {
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

exports.submit_deleteLeadJson = function (req, res, next) {
    userController.deleteUser(req, res);
}