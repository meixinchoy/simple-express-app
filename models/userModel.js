var mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,

        allowNull: false,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: true
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: true
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    is_admin: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    }
})

exports.UserModel = mongoose.model('User', userSchema)