const { models } = require("mongoose");
var User = require("../models/leadsModel")

exports.postUserDetail = async (req, res) => {
    try {
        const user = new User.UserModel();
        user.email = req.body.lead_email;
        await user.save()
        if (!user) {
            return res.status(200).send({
                status: 404,
                message: 'No data found'
            })
        }
        res.redirect('/leads');
        // res.status(200).send({
        //     status: 200,
        //     message: 'Data Save Successfully'
        // })
    } catch (error) {
        console.log(error)
        return res.status(400).send({
            message: 'Unable to update data',
            errors: error,
            status: 400
        })
    }
}

//function to get all users
exports.getUsers = async (req, res) => {
    try {
        const userid = await User.UserModel.find()

        return (
            res.render('lead/leads', { title: 'Express', leads: userid })
        )
        // if (!userid) {
        //     return res.status(200).send({
        //         status: 404,
        //         message: 'No data find'
        //     })
        // }
        // res.status(200).send({
        //     status: 200,
        //     message: 'Data find Successfully'
        // })
    } catch (error) {
        console.log(error)
        return res.status(400).send({
            message: 'Unable to find data',
            errors: error,
            status: 400
        })
    }
}

//function to get one users
exports.getOneUser = async (req, res) => {
    try {
        const user = await User.UserModel.findById(req.params.lead_id)

        return (
            res.render('lead/lead', { lead: user })
        )
    } catch (error) {
        console.log(error)
        return res.status(400).send({
            message: 'Error finding email',
            errors: error,
            status: 400
        })
    }
}

//function to edit one users
exports.editUser = async (req, res) => {
    try {
        const user = await User.UserModel.findById(req.params.lead_id)

        return (
            res.render('lead/edit_lead', { lead: user })
        )
    } catch (error) {
        console.log(error)
        return res.status(400).send({
            message: 'Error editing email',
            errors: error,
            status: 400
        })
    }
}

//function to submit edited email
exports.postEditedUser = async (req, res) => {
    try {
        let user = await User.UserModel.findById(req.params.lead_id);
        user.email = req.body.lead_email;

        user.save()
        res.redirect('/lead/' + req.params.lead_id);

    } catch (error) {
        console.log(error)
        return res.status(400).send({
            message: 'Unable to update data',
            errors: error,
            status: 400
        })
    }
}

//function to delete email
exports.deleteUser = async (req, res) => {
    try {
        let user = await User.UserModel.findById(req.params.lead_id);

        user.delete()
        res.redirect('/lead/leads');

    } catch (error) {
        console.log(error)
        return res.status(400).send({
            message: 'Unable to update data',
            errors: error,
            status: 400
        })
    }
}

//function to delete email w ajax
exports.deleteUser = async (req, res) => {
    try {
        let user = await User.UserModel.findById(req.params.lead_id);

        user.delete()
        res.send({ msg: "Success" });

    } catch (error) {
        console.log(error)
        return res.status(400).send({
            message: 'Unable to update data',
            errors: error,
            status: 400
        })
    }
}