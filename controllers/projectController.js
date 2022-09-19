const Projects = require('../models/proejct')
const catchAsync = require('../middlewares/catchAsync');
const {createCustomError} = require('../errors/custom-error')

const bringAllProjects = catchAsync( async(req,res) => {
    const allProjects = await Projects.find({}); // don't forget to use await it costing you 30 minutes
    res.status(200).send(allProjects)
})

const createProject = catchAsync( async(req,res) => {
    const thisproject = new Projects(req.body);
    const project = await thisproject.save();
    res.status(201).json({project})
})

const updateProject = catchAsync(async(req,res,next) => {
   // why params is not working here. because you may not included the /:id in the route.
    const {id} = req.params
    const thisProject = await Projects.findOneAndUpdate({_id:id}, req.body,{
    new: true,
    runValidators: true,
    });

   if(!thisProject){
    return next(createCustomError(`no project wiht Id: ${id}`, 404))
   }
    res.status(200).json({thisProject})

})

const deleteProject = catchAsync(async(req,res,next) => {
     const _id = req.params.id;
     const thisProject = await Projects.findOneAndDelete({_id})
     if(!thisProject){
        return next(createCustomError(`no project with id: ${_id}`,404))
     }
     res.status(200).send({thisProject})
})

// Silly your code is good the problem was with the thunder client that it was using   ?id=blahblahblah...



module.exports = {
    bringAllProjects,
    createProject,
    updateProject,
    deleteProject,
}