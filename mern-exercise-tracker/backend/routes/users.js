const router = require('express').Router();
let User = require('../models/user.model');

//CRUD Operations

//localhost:5000/users/

//Get request
router.route('/').get((req,res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Errors : ' +err));
});

//POST request
//localhost:5000/users/add
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const newUser = new User({username});

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Errors : '+ err));
});


module.exports = router;