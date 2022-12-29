const mongoose = require('mongoose')

const connect = async() => {
    await mongoose.connect( process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log( 'connection Successfully setup')).catch((err) => { console.log(err)})
}

module.exports = connect
