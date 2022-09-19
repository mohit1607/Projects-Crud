const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        max: [20, 'The lenght should be less than 20 characters'],
        min: [8, 'The lenght should be greater than 8 characters.']
    },
    description:{
        type: String,
        required:true,
        max: [40, 'Description should be of minimum length'],
    },
    repo: {
        type: String,
        unique: true,
        required: true,
    },
    demo: {
        type: String,
        unique:true,
        required:true,
    },
},{timestamps: true});

const Projects = mongoose.model('project', ProjectSchema)

module.exports = Projects