var mongoose = require('mongoose');

const leadSchema = mongoose.Schema({
    email: {
        type: String,
        //required: true,
        //unique: true
    },
}, {
    timestamps: true
})

exports.leadModel = mongoose.model('Leads', leadSchema)
