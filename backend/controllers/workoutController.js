const Workout = require('../models/workoutModel')

const mongoose = require('mongoose')


//get all workouts
const getAllWorkouts = async(req, res) => {
    
    try {
        const workouts = await Workout.find({}).sort({createdAt: -1 })
        res.status(200).json(workouts)
    } catch {
        res.status(400).json({error: error.message}) 
    }

}

//get single workout

const getWorkout = async(req, res) => {
    
    try {
        const {id} = req.params

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({error : "no such workout"})
        }

        const workout = await Workout.findById(id)

        if (!workout) {

        return res.status(400).json({error: "no such workout"}) 
        }

        res.status(200).json(workout)

    } catch {
    
        res.status(400).json({error: error.message}) 
    }

}


//create workout
const createWorkout = async(req, res) => {
    let {title, load, reps} = req.body
        console.log(req.body.title);
        title = req.body.title.toUpperCase();
        // uppercaseTitle = req.body.title
        
    //  title = title.toUpperCase();



    //add doc to db
    try {
        const workout = await Workout.create({title, load, reps})
        
        res.status(200).json(workout)
    } catch {
        res.status(400).json({error: error.message}) 
    }

}
//delete workout

const deleteWorkout = async(req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error : "no such workout"})
    }

    const workout = await Workout.findOneAndDelete({_id:id})

    if (!workout) {

        return res.status(400).json({error: "no such workout"}) 
        }

    res.status(200).json(workout)    

}

//update workout

const updateWorkout = async(req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error : "no such workout"})
    }
    const workout = await Workout.findOneAndUpdate({_id:id}, {...req.body})

    if (!workout) {

        return res.status(400).json({error: "no such workout"}) 
        }

    res.status(200).json(workout)    

}


module.exports = {
    createWorkout,
    getAllWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}