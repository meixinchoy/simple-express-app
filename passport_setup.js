let LocalStrategy = require('passport-local').Strategy;
var Lead = require("./models/leadsModel")

let bcrypt = require('bcrypt');

//API calls

const validPassword = function (user, password) {
    return bcrypt.compareSync(password, user.password);
}

module.exports = function (passport) {
    passport.serializeUser(function (user, done) {
        done(null, user.id)
    });
    passport.deserializeUser(function (id, done) {
        try {
            const user = Lead.leadModel.findById(id)

            done(null, user)
        } catch (error) {
            console.log(error)
            return res.status(400).send({
                message: 'Error finding email',
                errors: error,
                status: 400
            })
        }
    });
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
        function (req, email, password, done) {
            try {
                //const lead = new Lead.leadModel();
                const user = Lead.leadModel.find({ email: email })

                if (user == null) {
                    req.flash('message', 'Incorrect credentials.')
                    return done(null, false)
                } else if (user.password == null || user.password == undefined) {
                    req.flash('message', 'You must reset your password')
                    return done(null, false)
                } else if (!validPassword(user, password)) {
                    req.flash('message', 'Incorrect credentials')
                    return done(null, false)
                }
                return done(null, user);
            } catch (err) {
                done(err, false);
            }
        }))
}