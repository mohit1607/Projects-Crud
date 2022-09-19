const router = require('express').Router()
const { bringAllProjects, createProject, updateProject, deleteProject} = require('../controllers/projectController')


router.route('/').get(bringAllProjects).post(createProject) //silly mistake for not including /:id
router.route('/:id').patch(updateProject).delete(deleteProject)

module.exports = router;