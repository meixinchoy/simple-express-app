if (process.env.NODE_ENV !== "production") {
    require("dotenv").config()
}

var mongoose = require('mongoose');

exports.connectDB = async () => {
    try {
        //database Name
        const con = await mongoose.connect(process.env.DATABASE_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Database connected : ${con.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}
