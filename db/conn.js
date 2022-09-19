const mongoose = require('mongoose')

const connect = async() => {
    await mongoose.connect( `mongodb+srv://mohit1607:${process.env.KEY}@projectscluster.zntoqfe.mongodb.net/?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log( 'connection Successfully setup')).catch((err) => { console.log(err)})
}

module.exports = connect