const express = require('express')

const { MongooseError } = require('mongoose')

const {
    createWorkout,
    getAllWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout

} = require('./../controllers/workoutController')


const router = express.Router()

//get all workouts
router.get('/', getAllWorkouts)

//get a single workout
router.get('/:id', getWorkout)

//post  a workout
router.post('/', createWorkout)

//delete post
router.delete('/:id', deleteWorkout)

//update post
router.patch('/:id', updateWorkout)

module.exports = router;