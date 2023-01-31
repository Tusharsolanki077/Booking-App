const mongoose = require('mongoose');

const connectDatabase = () => {

    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }).then(() => {
        console.log(`MongoDb connected with server`)
    });
};

module.exports = connectDatabase