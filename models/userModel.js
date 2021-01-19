var mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: { type: String},
    firstname: { type: String},
    lastname: { type: String},
    password: { type: String, required: true },
    email: { type: String, required: true },
    is_admin: { type: String }
})

exports.UserModel = mongoose.model('User', userSchema)