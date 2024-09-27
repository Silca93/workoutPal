require('dotenv').config();
const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');

const workoutRoutes = require('./routes/workouts')

const userRoutes = require("./../backend/routes/user")

//express app
const app = express()

// Use the CORS middleware
app.use(cors());

// If you want to allow only specific origins:
app.use(cors({
  origin: 'http://localhost:5173' // Your frontend URL
}));

//middleware

app.use(express.json());
app.use((req,res,next) => {
    console.log(req.path, req.method);
    next();
    
})

//routes
app.use('/api/workouts', workoutRoutes);
app.use('/api/user', userRoutes);

//connect db
mongoose.connect(process.env.MONGO_URI)
.then(()=> {

//listening
    app.listen(process.env.PORT, () => {
        console.log('connected to DB & listening on port ' + process.env.PORT);
        
    })
})
.catch((error) => {
    console.log(error);
})




process.env