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
        res.redirect('/');
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








// import User from '../models/usersModel.js'
// import asyncHandler from 'express-async-handler'

// //getUsers function to get all users
// export const getUsers = asyncHandler(async (req, res) => {
//     const users = await User.find({})
//     res.json(users)
// })

// //getUserById function to retrieve user by id
// export const getUserById = asyncHandler(async (req, res) => {
//     const user = await User.findById(req.params.id)

//     //if user id match param id send user else throw error
//     if (user) {
//         res.json(user)
//     } else {
//         res.status(404).json({ message: "User not found" })
//         res.status(404)
//         throw new Error('User not found')
//     }
// })