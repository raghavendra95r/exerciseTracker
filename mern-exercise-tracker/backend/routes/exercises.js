const router = require('express').Router();
let Exercise = require('../models/exercise.model');

//CRUD Operations

//localhost:5000/exercises/

//Get request
router.route('/').get((req,res) => {
    Exercise.find()
    .then(user => res.json(exercises))
    .catch(err => res.status(400).json('Errors : ' +err));
});


//POST request
//localhost:5000/exercises/add
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = req.body.duration;
    const date = req.body.date;



    const newExercise = new Exercise({username,description,duration,date});

    newExercise.save()
    .then(() => res.json('Exercise added!'))
    .catch(err => res.status(400).json('Errors : '+ err));
});


module.exports = router;