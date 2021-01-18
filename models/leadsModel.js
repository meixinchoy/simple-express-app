var mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        //required: true,
        //unique: true
    },
}, {
    timestamps: true
})

exports.UserModel = mongoose.model('User', userSchema)
