const mongoose = require('mongoose');
const schema = mongoose.Schema;


const exerciseSchema = new schema({
    //exercise Schema
    username : { type: 'string',required: true },
    description : { type: 'string',required: true},
    duration : { type: Number,required: true},
    date : { type: Date,required: true},
},{
    //adding timestamps
        timestamps:true,
    
});


const Exercise = mongoose.model('exercise', exerciseSchema);
//exporting the exercise model
module.exports=Exercise;
